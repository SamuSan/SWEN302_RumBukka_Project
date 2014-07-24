using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Model
{

    [Table("user")]
    public partial class User
    {
        [Key]
        public int Student_Id { get; set; }
        public Nullable<int> VUWStudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Nullable<int> Type { get; set; }
        public Nullable<int> Role { get; set; }
        
        public virtual Organisation Organisation { get; set; }

        public virtual Phone Phone { get; set; }
        
        public virtual Booking Booking { get; set; }


    }
}
