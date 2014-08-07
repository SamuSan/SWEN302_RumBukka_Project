using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using System.Data.Entity;
using System.Threading.Tasks;
using DataAccess.Model;
using System.Threading;
using System.Net;
using System.Web;
using Newtonsoft.Json;
using System.IO;
using Server.Interfaces;
using Server.Handlers;

namespace Server
{
    class Program
    {
        static List<HttpHandler> handlers;

        static void Main(string[] args)
        {

            handlers = new List<HttpHandler>();
            handlers.Add(new RoomsHandler());
            handlers.Add(new BookingsHandler());
            handlers.Add(new UsersHandler());

            SyncServer();
        }


        public static void SyncServer()
        {
            var listener = new HttpListener();

            listener.Prefixes.Add("http://localhost:8081/");

            listener.Start();

            while (true)
            {
                try
                {
                    var context = listener.GetContext(); //Block until a connection comes in
                    context.Response.StatusCode = 200;
                    context.Response.SendChunked = true;


                    string url = context.Request.Url.PathAndQuery;
                    List<string> path = url.Split('/').Where(i => !i.Equals(string.Empty)).ToList();

                    Object response = null;



                    if (path.Count == 0)
                    {
                        response = File.OpenText("index.html").ReadToEnd();
                    }
                    else if (path.Count > 0 && path[0].Equals("api"))
                    {

                        HttpHandler handler = handlers.Where(i => i.GetType().Name.ToLower().Contains(path[1])).FirstOrDefault();

                        if (handler == null)
                            response = "WOAH NO SUCH HANDLER FOOL";


                        try
                        {
                            if (path.Count > 2)
                                response = handler.getSingle(int.Parse(path[2]));
                            else
                                response = handler.getList();
                        }
                        catch (Exception ex) { response = ex.Message + "<br />" + ex.StackTrace; }

                    }

                    string json = JsonConvert.SerializeObject(response);


                    var bytes = Encoding.UTF8.GetBytes(json);
                    context.Response.OutputStream.Write(bytes, 0, bytes.Length);

                    context.Response.Close();
                }
                catch (Exception)
                {
                    // Client disconnected or some other error - ignored for this example
                }
            }
        }
    }
}
