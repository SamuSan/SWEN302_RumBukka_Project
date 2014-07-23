using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Model
{
    [Table("phone")]
    public partial class Phone
    {
        public Phone()
        {
            this.Rooms = new HashSet<Room>();
        }
        [Key]
        public int Phone_Id { get; set; }
        public string PhoneNumber { get; set; }

        public virtual ICollection<Room> Rooms { get; set; }

    }

}
