using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;
using Dapper;

namespace BookAndCanvas.Repositories {
  public class ProductRepo: IProductRepository {
    public Product AddNewProduct(NewProductDTO newProduct) {
      using (var db = new SqlConnection(RepositoryConstants.ConnectionString)) {
        var sql = @"INSERT INTO Product
                            ([ServiceType], [Description], [SellerId], [ProductName], [Price], [ImgUrl], [Qty])
                            output inserted.*
                            VALUES(@ServiceType, @Description, @SellerId, @ProductName, @Price, @ImgUrl, @Qty)";

        return db.QueryFirst<Product>(sql, newProduct);
      }
    }

    public IEnumerable<Product> GetAllProducts() {
      try {
        using (var db = new SqlConnection(RepositoryConstants.ConnectionString)) {
          var products = db.Query<Product>(@"Select * from Product");
          return products.ToList();
        }
      } catch (Exception exception) {
        Console.WriteLine($"Error getting products: {exception}");
      }

      return new List<Product>();
    }
  }
}