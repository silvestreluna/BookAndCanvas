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

                var repo = new ProductAndInvoiceRepo();
                
                foreach(var inv in allUserInvoices)
                {
                    List<Product> tempProd = new List<Product>();
                    var invWithProd = repo.GetInvoiceById(inv.Id);
                    foreach(var invProd in invWithProd)
                    {
                        var prodRepo = new ProductRepo();
                        var artwork= prodRepo.GetProductById(invProd.ProductId);
                        tempProd.AddRange(artwork);
                    }

                    inv.ArtWork = new List<Product>();
                    inv.ArtWork.AddRange(tempProd);
                }

                return allUserInvoices;
               
            }
           
        }

        public IEnumerable<Invoice> GetInvoiceById(int invoiceId)
        {
            using(var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT * FROM Invoice WHERE [Id] = @invoiceId";

                return db.Query<Invoice>(sql, new { invoiceId 
                });
            }

        }

    }
}
