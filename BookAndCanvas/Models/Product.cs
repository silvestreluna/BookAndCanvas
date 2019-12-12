using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.Models
{
    public class Product
    {
        public int Id { get; set; }
        public int ServiceType { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public string ProductName { get; set; }
        public int SellerId { get; set; }
        public string ImgUrl { get; set; }
        public DateTime DateAdded { get; set; }
        public int Qty { get; set; }
        public List<string> imgList{ get; set; }
    }
}
