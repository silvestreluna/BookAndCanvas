using System.Collections.Generic;
using System.Data.SqlClient;
using BookAndCanvas.Models;
using Dapper;

namespace BookAndCanvas.Repositories {
  public class ServiceRepo {
    public IEnumerable<Service> GetAllServices() {
      using (var db = new SqlConnection(RepositoryConstants.ConnectionString)) {
        var sql = "SELECT * FROM [Service]";

        return db.Query<Service>(sql);
      }
    }
  }
}