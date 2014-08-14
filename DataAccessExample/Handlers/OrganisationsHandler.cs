using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Model;
using Server.Interfaces;

namespace Server.Handlers
{
    public class OrganisationsHandler : HttpHandler

    {
        BookingContext db = new BookingContext();

        public object getSingle(int id)
        {
            return db.Organisations.Where(i=>i.Organisation_Id == id).FirstOrDefault();
        }

        public object getList()
        {
            return db.Organisations.ToList();
        }

	public object postNew(string json)
        {
	  return null;
        }
    }
}
