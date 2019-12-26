using BookAndCanvas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.DTOs
{
    public class ProductAndInvoiceDTO
    {
        public class ProductAndInvoice
        {
            public int Id { get; set; }
            public List<Invoice> Invoices { get; set; }
            public List<Product> Products { get; set; }
        }
    }
}
