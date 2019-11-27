using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.Models
{
    public class NewUserDTO
    {
        public string FName { get; set; }
        public string LName { get; set; }
        public string PhoneNum { get; set; }
        public string Email { get; set; }
        public string ImgUrl { get; set; }
        public string Bio { get; set; }
    }
}