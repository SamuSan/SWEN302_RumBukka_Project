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
    public class BookingsHandler : HttpHandler
    {

        BookingContext db = new BookingContext();

        public object getSingle(int id)
        {
            return db.Bookings.Where(i=>i.Booking_Id == id).FirstOrDefault();
        }

        public object getList()
        {
            return db.Bookings.ToList();
        }

        public object postNew(string json)
        {
	  return null;
        }
        public object deleteSingle(int id)
        {
        db.Bookings.Remove((Booking)getSingle(id));
        db.SaveChanges();
        return "deletion";
        }
        public object update(string json)
        {
        Booking update = JsonConvert.DeserializeObject<Booking>(json);
        Booking current = (Booking)getSingle(update.Booking_Id);
        
        current.StartDate = update.StartDate;
        current.EndDate = update.EndDate;
        db.SaveChanges();       
        return "update";
        }

    }
}

