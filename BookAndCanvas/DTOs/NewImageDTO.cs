using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.DTOs
{
    public class NewImageDTO
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public string ImageUrl { get; set; }
    }
}
