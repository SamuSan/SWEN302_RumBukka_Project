using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using System.Data.Entity;
using System.Threading.Tasks;
using DataAccess.Model;
using Server.Interfaces;
using Newtonsoft.Json;

namespace Server.Handlers
{
    public class RoomsHandler : HttpHandler
    {

        BookingContext db = new BookingContext();

        public object getSingle(int id)
        {
            return db.Rooms.FirstOrDefault().RoomName;
        }

        public object getList()
        {
            return db.Rooms.ToList();
        }

        public object postNew(string json)
        {
	  
	  Room room = JsonConvert.DeserializeObject<Room>(json);
	  
	  db.Rooms.Add(room);
	  
	  db.SaveChanges();
	  
	  return room;
        }

    }
}
