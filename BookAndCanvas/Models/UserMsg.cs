using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.Models
{
    public class UserMsg
    {
        public int Id { get; set; }
        public int MessageId { get; set; }
        public int BuyersId { get; set; }
        public int SellerId { get; set; }

    }
}
