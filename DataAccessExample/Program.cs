using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using System.Data.Entity;
using System.Threading.Tasks;
using DataAccess.Model;

namespace DataAccessExample
{
    class Program
    {
      
        static void Main(string[] args)
        {
            BookingContext db = new BookingContext();

            db.Database.Connection.Open();

            log(db.Rooms.FirstOrDefault().RoomName);

            Console.In.Read();

        }

        static void init(BookingContext db)
        { 
            Organisation o = new Organisation() { OrganisationName="COMP" };

            db.Organisations.Add(o);

            db.SaveChanges();

            Room r = new Room() { RoomName = "CO301", Organisation = o };

            db.Rooms.Add(r);

            User u = new User() { FirstName = "Daygen", LastName = "Byford", VUWStudentId = 300277326, Organisation = o };

            db.Users.Add(u);

            Phone p = new Phone() { PhoneNumber = "0212664741" };

            db.Phones.Add(p);

            db.SaveChanges();

            o.Rooms.Add(r);

            o.Users.Add(u);

            r.Phones.Add(p);

            Booking b = new Booking() { Room = r, User = u, EndDate = DateTime.Now.AddMonths(1), StartDate = DateTime.Now };

            db.Bookings.Add(b);

            db.SaveChanges();

        }

        static void log(string message)
        {
            Console.Out.WriteLine(message);
        }
    
        
    }
}
