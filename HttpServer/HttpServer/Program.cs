using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using DataAccess.Model;
using HttpServer.Handlers;

/**
 * https://www.codehosting.net/blog/BlogEngine/post/Simple-C-Web-Server.aspx
 * */

namespace HttpServer
{
    public class Program
    {
        public static BookingContext Connection = new BookingContext();

        public static List<RequestHandler> Routes = new List<RequestHandler>();

        static void Main(string[] args)
        {
            Connection.Database.Connection.Open();

            SetupRoutes();

            WebServer ws = new WebServer(SendResponse, "http://localhost:8080/");
            ws.Run();
            Console.WriteLine("A simple webserver. Press a key to quit.");
            Console.ReadKey();
            ws.Stop();
        }

        private static void SetupRoutes()
        {
            Routes.Add(new RoomHandler());
        }

        public static string SendResponse(HttpListenerRequest request)
        {
            string url = request.Url.PathAndQuery;

            string method = request.HttpMethod;

            if (url.Equals("/"))
                return "<h1>index</h1>";

            List<string> path = url.Split('/').Where(i => i.Length > 0).ToList();

            string handler = string.Empty, id = string.Empty;

            if (path.Count() > 0)
                handler = path[0];

            if (path.Count() > 1)
                id = path[1];

            RequestHandler response = Routes.Where(i => i.GetType().Name.Equals(handler.Replace("s", "Handler"))).FirstOrDefault();
            if (response == null)
                return "There is no such handler";

            object returnValue = null;

            if (id != string.Empty)
                returnValue = response.GetSingle(int.Parse(id));
            else
                returnValue = response.GetList();

            string json = JsonConvert.SerializeObject(returnValue, Formatting.Indented,
                new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });

            // check url and call GetResponse depending on the resource requested
            return json;
        }
    }
}
