using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options) // This is primary constructor
    {
        public required  DbSet<Product> Products { get; set; }
    } 
}
