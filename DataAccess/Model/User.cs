using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace DataAccess.Model
{

    [JsonObject(MemberSerialization.OptOut)]
    [Table("user")]
    public partial class User
    {
        [Key]
        public int User_Id { get; set; }
        public Nullable<int> VUWId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Nullable<int> Type { get; set; }

        public virtual Organisation Organisation { get; set; }

        public virtual Phone Phone { get; set; }
        
        public string Email { get; set; }
        
        public string Mobile { get; set; }

    [JsonIgnore]
        public virtual ICollection<Booking> Bookings { get; set; }

    }
}
