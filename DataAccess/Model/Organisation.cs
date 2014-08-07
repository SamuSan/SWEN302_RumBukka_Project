using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace DataAccess.Model
{
    [JsonObject(MemberSerialization.OptOut)]
    [Table("organisation")]
    public partial class Organisation
    {
        public Organisation()
        {
            this.Rooms = new HashSet<Room>();
            this.Users = new HashSet<User>();
        }

        [Key]
        public int Organisation_Id { get; set; }
        public string OrganisationName { get; set; }

	
	[JsonIgnore]
        public virtual ICollection<Room> Rooms { get; set; }
        
	[JsonIgnore]
        public virtual ICollection<User> Users { get; set; }
    }
}
