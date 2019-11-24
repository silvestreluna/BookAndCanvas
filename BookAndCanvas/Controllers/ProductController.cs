using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;
using BookAndCanvas.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookAndCanvas.Controllers1
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpPost]
        public IActionResult AddProduct(NewProductDTO newProduct)
        {
            var repo = new ProductRepo();
            var createdProduct = repo.AddNewProduct(newProduct);
            return Ok(createdProduct);
        }
    }
}