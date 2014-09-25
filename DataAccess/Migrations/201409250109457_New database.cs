namespace DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Newdatabase : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.booking",
                c => new
                    {
                        Booking_Id = c.Int(nullable: false, identity: true),
                        StartDate = c.DateTime(nullable: false, precision: 0),
                        EndDate = c.DateTime(nullable: false, precision: 0),
                        privateBooking = c.Boolean(nullable: false),
                        User_User_Id = c.Int(nullable: false),
                        Room_Room_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Booking_Id)
                .ForeignKey("dbo.user", t => t.User_User_Id, cascadeDelete: true)
                .ForeignKey("dbo.room", t => t.Room_Room_Id, cascadeDelete: true)
                .Index(t => t.User_User_Id)
                .Index(t => t.Room_Room_Id);
            
            CreateTable(
                "dbo.room",
                c => new
                    {
                        Room_Id = c.Int(nullable: false, identity: true),
                        RoomName = c.String(unicode: false),
                        Organisation_Organisation_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Room_Id)
                .ForeignKey("dbo.organisation", t => t.Organisation_Organisation_Id, cascadeDelete: true)
                .Index(t => t.Organisation_Organisation_Id);
            
            CreateTable(
                "dbo.organisation",
                c => new
                    {
                        Organisation_Id = c.Int(nullable: false, identity: true),
                        OrganisationName = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.Organisation_Id);
            
            CreateTable(
                "dbo.user",
                c => new
                    {
                        User_Id = c.Int(nullable: false, identity: true),
                        VUWId = c.Int(),
                        FirstName = c.String(unicode: false),
                        LastName = c.String(unicode: false),
                        Type = c.Int(),
                        Email = c.String(unicode: false),
                        Mobile = c.String(unicode: false),
                        Phone_Phone_Id = c.Int(),
                        Organisation_Organisation_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.User_Id)
                .ForeignKey("dbo.phone", t => t.Phone_Phone_Id)
                .ForeignKey("dbo.organisation", t => t.Organisation_Organisation_Id, cascadeDelete: true)
                .Index(t => t.Phone_Phone_Id)
                .Index(t => t.Organisation_Organisation_Id);
            
            CreateTable(
                "dbo.phone",
                c => new
                    {
                        Phone_Id = c.Int(nullable: false, identity: true),
                        PhoneNumber = c.String(unicode: false),
                        Room_Room_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Phone_Id)
                .ForeignKey("dbo.room", t => t.Room_Room_Id, cascadeDelete: true)
                .Index(t => t.Room_Room_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.booking", "Room_Room_Id", "dbo.room");
            DropForeignKey("dbo.phone", "Room_Room_Id", "dbo.room");
            DropForeignKey("dbo.user", "Organisation_Organisation_Id", "dbo.organisation");
            DropForeignKey("dbo.user", "Phone_Phone_Id", "dbo.phone");
            DropForeignKey("dbo.booking", "User_User_Id", "dbo.user");
            DropForeignKey("dbo.room", "Organisation_Organisation_Id", "dbo.organisation");
            DropIndex("dbo.booking", new[] { "Room_Room_Id" });
            DropIndex("dbo.phone", new[] { "Room_Room_Id" });
            DropIndex("dbo.user", new[] { "Organisation_Organisation_Id" });
            DropIndex("dbo.user", new[] { "Phone_Phone_Id" });
            DropIndex("dbo.booking", new[] { "User_User_Id" });
            DropIndex("dbo.room", new[] { "Organisation_Organisation_Id" });
            DropTable("dbo.phone");
            DropTable("dbo.user");
            DropTable("dbo.organisation");
            DropTable("dbo.room");
            DropTable("dbo.booking");
        }
    }
}
