using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

/**
 * https://www.codehosting.net/blog/BlogEngine/post/Simple-C-Web-Server.aspx
 * */

namespace TestServer
{
    class Program
    {
        static void Main(string[] args)
        {
            WebServer ws = new WebServer(SendResponse, "http://localhost:8080/test/");
            ws.Run();
            Console.WriteLine("A simple webserver. Press a key to quit.");
            Console.ReadKey();
            ws.Stop();
        }

        public static string SendResponse(HttpListenerRequest request)
        {
            // check url and call GetResponse depending on the resource requested
            return JsonConvert.SerializeObject(new somesuch());
        }
    }

    class somesuch
    {
        public string date = DateTime.Now.ToString();

    }
}
