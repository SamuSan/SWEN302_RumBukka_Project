using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Model;
using Server.Interfaces;
using Newtonsoft.Json;

namespace Server.Handlers
{
    public class UsersHandler : HttpHandler

    {
        BookingContext db = new BookingContext();

        public object getSingle(int id)
        {
            return db.Users.Where(i=>i.Student_Id == id).FirstOrDefault();
        }

        public object getList()
        {
            return db.Users.ToList();
        }

	public object postNew(string json)
        {
	  
	  User user = JsonConvert.DeserializeObject<User>(json);
	
	  user.Organisation = db.Organisations.Where(i=>i.Organisation_Id == user.Organisation.Organisation_Id).FirstOrDefault();
	
	  db.Users.Add(user);
	  
	  db.SaveChanges();
	  
	  return user;
        }
        
        public object deleteSingle(int id)
        {
        db.Users.Remove((User)getSingle(id));
        db.SaveChanges();
        return "delete";
        } 
        
        public object update(string json)
        {
        return null;
        }
        }  
        
        public object getFilter(int id)
        {
        return null;
        }
    }
}
