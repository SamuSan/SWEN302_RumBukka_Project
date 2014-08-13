using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Model
{

    [Table("student")]
    public partial class Student
    {
        [Key]
        public int Student_Id { get; set; }
        public Nullable<int> VUWStudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Nullable<int> Type { get; set; }
        public Nullable<int> Role { get; set; }
        public int Room_Id { get; set; }

        public virtual Room Room { get; set; }


    }
}
