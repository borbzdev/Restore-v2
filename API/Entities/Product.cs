namespace API.Entities;

public class Product
{
    public int Id { get; set; } // it will use as PK using the Entity Framework
    public required string Name { get; set; } // C# 7 added modifier like required
    public required    string Description { get; set; }
    public long Price { get; set; }
    public required string PictureUrl { get; set; }
    public required string Type { get; set; }
    public  required string Brand { get; set; }
    public int QuantityInStock {  get; set; }

}
