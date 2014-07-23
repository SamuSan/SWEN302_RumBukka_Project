using DataAccess.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Common;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Model
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class BookingContext : DbContext
    {

        public DbSet<Room> Rooms { get; set; }
        public DbSet<Phone> Phones { get; set; }
        public DbSet<Student> Students { get; set; }

        public BookingContext()
            : base("BookingConnection")
        { }

        static BookingContext()
        {
            DbConfiguration.SetConfiguration(new MySql.Data.Entity.MySqlEFConfiguration());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {


            modelBuilder.Entity<Phone>()
                .HasMany(x => x.Rooms)
                .WithMany(x => x.Phones)
            .Map(x =>
            {
                x.ToTable("room_phone");
                x.MapLeftKey("Phone_Id");
                x.MapRightKey("Room_Id");
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
