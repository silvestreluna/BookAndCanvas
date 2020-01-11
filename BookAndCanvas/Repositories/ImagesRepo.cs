using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
<<<<<<< HEAD
=======
using BookAndCanvas.DTOs;
>>>>>>> master
using BookAndCanvas.Models;
using Dapper;

namespace BookAndCanvas.Repositories
{
    public class ImagesRepo
    {
        string _connectionString = "Server=localhost;Database=BookAndCanvas;Trusted_Connection=True";

        public IEnumerable<Images> GetImages(int productId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from images
                            where productId = @ProductId
                          ";
            
                return db.Query<Images>(sql, new { productId });
            }
        }
<<<<<<< HEAD
       
=======

        public Images AddImage(NewImageDTO newImg)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [dbo].[Images]
                                            ([userId],[productId],[imageUrl])
                                            output inserted.*
                                            VALUES(@userId, @productId, @imageUrl)";
                return db.QueryFirst<Images>(sql, newImg);

            }
        }

>>>>>>> master
    }
}
