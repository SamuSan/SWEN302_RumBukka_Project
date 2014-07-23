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
            while (1 == 1)
            {

                Room r = db.Rooms.FirstOrDefault();

                Phone p = db.Phones.Where(i=>i.PhoneNumber.Equals("0273452213")).FirstOrDefault();

                r.Phones.Add(p);

                db.SaveChanges();

                log(string.Format("Getting students for room: {0}. Room numbers: {1}", r.RoomName, string.Join(", ", r.Phones.Select(i => i.PhoneNumber).ToArray())));

                foreach (Student s in r.Students)
                {
                    log(string.Format("Student: {0}", s.FirstName));
                }

                Console.In.Read();

            }
        }
         
        static void log(string message)
        {
            Console.Out.WriteLine(message);
        }
    
        
    }
}
