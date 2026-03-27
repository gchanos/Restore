using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
          .HasData(
            new IdentityRole { Id = "a3adf781-9a8a-4412-b6d2-8906ae3aa9b3", Name = "Member", NormalizedName = "MEMBER" },
            new IdentityRole { Id = "8266016f-25f7-4fbd-b65d-c31377981390", Name = "Admin", NormalizedName = "ADMIN" }
          );
    }
}
