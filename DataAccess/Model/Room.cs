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
    [Table("room")]
    public partial class Room
    {
        public Room()
        {
            this.Bookings = new HashSet<Booking>();
            this.Phones = new HashSet<Phone>();
        }

        [Key]
        public int Room_Id { get; set; }
        public string RoomName { get; set; }
        public int BuildingId { get; set; }
        public int Level { get; set; }
<<<<<<< HEAD
        // public int Capacity { get; set; }
=======
         public int Capacity { get; set; }
>>>>>>> f7902eb4f8afaaa15bc2739aa7a3f7974876886d
	
        public virtual Organisation Organisation { get; set; }
	
	[JsonIgnore]
        public virtual ICollection<Booking> Bookings { get; set; }
	[JsonIgnore]
        public virtual ICollection<Phone> Phones { get; set; }


    }

}
