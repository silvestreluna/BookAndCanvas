using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.DTOs
{
    public class NewProductDTO
    {
        public int ServiceType { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public string ProductName { get; set; }
        public int SellerId { get; set; }
        public string ImgUrl { get; set; }
    }
}
