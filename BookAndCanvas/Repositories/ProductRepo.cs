using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;
using Microsoft.AspNetCore.Mvc;
using Dapper;

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

                    var product = db.QueryFirst<Product>(sql, new { ProductId = id });
                    
                    var productImages = new ImagesRepo();
                    var allProductImages = productImages.GetImages(product.Id);
                    var listOfProductImageUrls = allProductImages.Select(x => x.ImageUrl);
                    product.imgList = listOfProductImageUrls.ToList();
                return product;
            }
        }


        public bool DeleteProdById(int productId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"DELETE FROM PRODUCT WHERE Id = @productId";
                return db.Execute(sql, new { productId}) == 1;
            }
        }

        public bool UpdateProductById(Product updatedProduct, int id)
        {
            using(var db = new SqlConnection(_connectionString))
            {
                var sql = @"UPDATE [dbo].[Product]
                            SET [ServiceType] = @serviceType,
                            [Description] = @description,
                            [SellerId] = @sellerId,
                            [ProductName] = @productName,
                            [Price] = @price,
                            [ImgUrl] = @imgUrl,
                            [Qty] = @qty
                            WHERE [Id] = @id";
                updatedProduct.Id = id;


                return db.Execute(sql, updatedProduct)== 1;
            }
        }
    }
}