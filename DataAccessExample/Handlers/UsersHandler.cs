using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Model;
using Server.Interfaces;

namespace Server.Handlers
{
    public class UsersHandler : HttpHandler

    {
        BookingContext db = new BookingContext();

        public object getSingle(int id)
        {
            return db.Users.FirstOrDefault().FirstName;
        }

        public object getList()
        {
            return db.Users.ToList();
        }

    }
}
