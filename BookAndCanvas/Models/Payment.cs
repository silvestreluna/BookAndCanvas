using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public float Total { get; set; }
        public int PaymentTypeId { get; set; }
    }
}
