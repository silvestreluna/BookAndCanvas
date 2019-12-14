using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;
using Dapper;

namespace BookAndCanvas.Repositories
{
    public class UsersRepo : IUsersRepository

    {
        string _connectionString = "Server=localhost;Database=BookAndCanvas;Trusted_Connection=True";
        public Users AddNewUsers(NewUsersDTO newUser)
        {
            using (var db = new SqlConnection(_connectionString))

            {
                var sql = @"INSERT INTO Users
                                       ([fName]
                                       ,[lName]
                                       ,[Email]
                                       ,[Phone] 
                                       ,[ImgUrl]
                                       ,[Bio]
                                                )
                                    output inserted.*
                                    VALUES
                                       (@fname
                                       ,@lname
                                       ,@email
                                       ,@phone
                                       ,@imgurl
                                       ,@bio)";
                return db.QueryFirst<Users>(sql, newUser);
            }
        }

        public IEnumerable<Users> GetAllUsers()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var users = db.Query<Users>(@"Select * from Users");
                return users.ToList();
            }
        }

        public Users GetUser(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from Users
                            where Users.Id = @userId";

                var user = db.QueryFirst<Users>(sql, new { userId = id });
                return user;
            }
        }

        public Users Update(Users updatedUser, int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"UPDATE [Users]
                                SET  [fName] = @fname
                                       ,[lName] = @lname
                                       ,[Email] = @email
                                       ,[Phone] = @phone
                                       ,[ImgUrl] = @imgurl
                                       ,[Bio] = @bio
                                output inserted.*
                                WHERE id = @id";

                updatedUser.Id = id;

                var user = db.QueryFirst<Users>(sql, updatedUser);

                return user;
            }
        }

        public bool Remove(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete 
                            from Users 
                            where [id] = @id";

                return db.Execute(sql, new { id }) == 1;
            }
        }

        public Users GetUserByEmail(string email)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from Users
                            where Users.Email = @userEmail";

                var user = db.QueryFirst<Users>(sql, new { userEmail = email });
                return user;
            }
        }
    }
}