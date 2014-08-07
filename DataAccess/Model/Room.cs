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
	
        public virtual Organisation Organisation { get; set; }
	
	[JsonIgnore]
        public virtual ICollection<Booking> Bookings { get; set; }
	[JsonIgnore]
        public virtual ICollection<Phone> Phones { get; set; }


    }

}
