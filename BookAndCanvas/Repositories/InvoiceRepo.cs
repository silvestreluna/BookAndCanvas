using BookAndCanvas.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace BookAndCanvas.Repositories
{
    public class InvoiceRepo
    {
        string _connectionString = "Server=localhost;Database=BookAndCanvas;Trusted_Connection=True";
        public IEnumerable<Invoice> GetInvoiceByUser(int userId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT 
                                [Id], 
                                [Date], 
                                [Total],
                                [BuyerId],
                                [ServiceType],
                                [PaymentId]
                           FROM Invoice 
                                WHERE [BuyerId] = @userId";

                var allUserInvoices = db.Query<Invoice>(sql, new { userId });

                //var repo = new ProductRepo();
                //foreach(var invoice in allUserInvoices)
                //{
                //    var invoiceProduct = repo.GetProductById(invoice.Id);
                //    invoice.ArtWork = new List<Product>();
                //    invoice.ArtWork.AddRange(invoiceProduct);
                //}

                //return allUserInvoices.ToList();
                return allUserInvoices;
               
            }
            
        }
    }
}
