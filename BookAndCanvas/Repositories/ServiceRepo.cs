using BookAndCanvas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
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
