namespace DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.phone",
                c => new
                    {
                        Phone_Id = c.Int(nullable: false, identity: true),
                        PhoneNumber = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.Phone_Id);
            
            CreateTable(
                "dbo.room",
                c => new
                    {
                        Room_Id = c.Int(nullable: false, identity: true),
                        RoomName = c.String(unicode: false),
                        BuildingId = c.Int(nullable: false),
                        Level = c.Int(nullable: false),
                        Organisation_Organisation_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Room_Id)
                .ForeignKey("dbo.organisation", t => t.Organisation_Organisation_Id, cascadeDelete: true)
                .Index(t => t.Organisation_Organisation_Id);
            
            CreateTable(
                "dbo.booking",
                c => new
                    {
                        Booking_Id = c.Int(nullable: false),
                        StartDate = c.DateTime(nullable: false, precision: 0),
                        EndDate = c.DateTime(nullable: false, precision: 0),
                        Room_Room_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Booking_Id)
                .ForeignKey("dbo.user", t => t.Booking_Id)
                .ForeignKey("dbo.room", t => t.Room_Room_Id, cascadeDelete: true)
                .Index(t => t.Booking_Id)
                .Index(t => t.Room_Room_Id);
            
            CreateTable(
                "dbo.user",
                c => new
                    {
                        Student_Id = c.Int(nullable: false, identity: true),
                        VUWStudentId = c.Int(),
                        FirstName = c.String(unicode: false),
                        LastName = c.String(unicode: false),
                        Type = c.Int(),
                        Role = c.Int(),
                        Organisation_Organisation_Id = c.Int(nullable: false),
                        Phone_Phone_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Student_Id)
                .ForeignKey("dbo.organisation", t => t.Organisation_Organisation_Id, cascadeDelete: true)
                .ForeignKey("dbo.phone", t => t.Phone_Phone_Id)
                .Index(t => t.Organisation_Organisation_Id)
                .Index(t => t.Phone_Phone_Id);
            
            CreateTable(
                "dbo.organisation",
                c => new
                    {
                        Organisation_Id = c.Int(nullable: false, identity: true),
                        OrganisationName = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.Organisation_Id);
            
            CreateTable(
                "dbo.room_phone",
                c => new
                    {
                        Phone_Id = c.Int(nullable: false),
                        Room_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Phone_Id, t.Room_Id })
                .ForeignKey("dbo.phone", t => t.Phone_Id, cascadeDelete: true)
                .ForeignKey("dbo.room", t => t.Room_Id, cascadeDelete: true)
                .Index(t => t.Phone_Id)
                .Index(t => t.Room_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.room_phone", "Room_Id", "dbo.room");
            DropForeignKey("dbo.room_phone", "Phone_Id", "dbo.phone");
            DropForeignKey("dbo.booking", "Room_Room_Id", "dbo.room");
            DropForeignKey("dbo.user", "Phone_Phone_Id", "dbo.phone");
            DropForeignKey("dbo.user", "Organisation_Organisation_Id", "dbo.organisation");
            DropForeignKey("dbo.room", "Organisation_Organisation_Id", "dbo.organisation");
            DropForeignKey("dbo.booking", "Booking_Id", "dbo.user");
            DropIndex("dbo.room_phone", new[] { "Room_Id" });
            DropIndex("dbo.room_phone", new[] { "Phone_Id" });
            DropIndex("dbo.booking", new[] { "Room_Room_Id" });
            DropIndex("dbo.user", new[] { "Phone_Phone_Id" });
            DropIndex("dbo.user", new[] { "Organisation_Organisation_Id" });
            DropIndex("dbo.room", new[] { "Organisation_Organisation_Id" });
            DropIndex("dbo.booking", new[] { "Booking_Id" });
            DropTable("dbo.room_phone");
            DropTable("dbo.organisation");
            DropTable("dbo.user");
            DropTable("dbo.booking");
            DropTable("dbo.room");
            DropTable("dbo.phone");
        }
    }
}
