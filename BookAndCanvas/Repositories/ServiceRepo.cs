using System.Collections.Generic;
using System.Data.SqlClient;
using BookAndCanvas.Models;
using Dapper;

namespace BookAndCanvas.Repositories
{
    public class ServiceRepo
    {
        string _connectionString = "Server=localhost;Database=BookAndCanvas;Trusted_Connection=True";

        public IEnumerable<Service> GetAllServices()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "SELECT * FROM [Service]";

                return db.Query<Service>(sql);
            }
        }

    }
}