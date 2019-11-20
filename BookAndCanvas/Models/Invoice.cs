using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.Models
{
    public class Invoice
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public float Total { get; set; }
        public int BuyerId { get; set; }
        public int ServiceType { get; set; }
        public int PaymentId { get; set; }
    }
}
