using BookAndCanvas.DTOs;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using BookAndCanvas.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookAndCanvas.Repositories
{
    public class ProductRepo : IProductRepository
    {
        string _connectionString = "Server=localhost;Database=BookAndCanvas;Trusted_Connection=True";

        public Product AddNewProduct(NewProductDTO newProduct)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO Product
                            ([ServiceType], [Description], [SellerId], [ProductName], [Price], [ImgUrl], [Qty])
                            output inserted.*
                            VALUES(@ServiceType, @Description, @SellerId, @ProductName, @Price, @ImgUrl, @Qty)";

                return db.QueryFirst<Product>(sql, newProduct);
            }
        }

        public IEnumerable<Product> GetAllProducts()
        {
            
            using (var db = new SqlConnection(_connectionString))
            {
                var products = db.Query<Product>(@"Select * from Product");
                return products.ToList();
            }
        }


        public ActionResult<Product> GetProductById(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from Product
                            where Product.Id = @ProductId";

                var Product = db.QueryFirst<Product>(sql, new { ProductId = id });
                return Product;
            }
        }
    }
}
