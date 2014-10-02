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
    [Table("booking")]
    public class Booking
    {
        [Key]
        public int Booking_Id { get; set; }

        public virtual User User { get; set; }

        public virtual Room Room { get; set; }

	public int SeatNumber {get;set;}
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
        
        public bool privateBooking { get; set; } //only one user for this booking
    }
}
