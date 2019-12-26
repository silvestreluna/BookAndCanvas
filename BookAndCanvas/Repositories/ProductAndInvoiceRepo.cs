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
    public class ProductAndInvoiceRepo
    {
        string _connectionString = "Server=localhost;Database=BookAndCanvas;Trusted_Connection=True";

        public IEnumerable<ProductAndInvoice> GetInvoiceById(int invId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT * 
                                    FROM Product_Invoice
                                    WHERE InvoiceId = @invId";

                return db.Query<ProductAndInvoice>(sql, new { invId });
            }
        }
    }
}
