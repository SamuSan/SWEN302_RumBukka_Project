using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HttpServer.Handlers
{
    public class RoomHandler : RequestHandler
    {

        public object GetList()
        {
            return Program.Connection.Rooms.ToList();
        }

        public object GetSingle(int id)
        {
            return Program.Connection.Rooms.Where(i => i.Room_Id == id).FirstOrDefault();
        }
    }
}
