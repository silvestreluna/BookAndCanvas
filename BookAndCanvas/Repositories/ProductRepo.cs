using BookAndCanvas.DTOs;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using BookAndCanvas.Models;

namespace BookAndCanvas.Repositories
{
    public class ProductRepo
    {
        string _connectionString = "Server=localhost;Database=BookAndCanvas;Trusted_Connection=True";

        public Product AddNewProduct(NewProductDTO newProduct)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO Product
                            ([ServiceType], [Description], [SellerId], [ProductName], [Price], [ImgUrl])
                            output inserted.*
                            VALUES(@ServiceType, @Description, @SellerId, @ProductName, @Price, @ImgUrl)";

                return db.QueryFirst<Product>(sql, newProduct);
            }
        }
    }
}
