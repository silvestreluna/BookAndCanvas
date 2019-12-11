using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;
using BookAndCanvas.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookAndCanvas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        private readonly IProductRepository _repo;

        public ProductController(ILogger<ProductController> logger, IProductRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpPost]
        public IActionResult AddProduct(NewProductDTO newProduct)
        {
            var createdProduct = _repo.AddNewProduct(newProduct);
            return Ok(createdProduct);
        }
        [HttpGet]
        public IEnumerable<Product> GetAll()
        {
            return _repo.GetAllProducts();
        }

        [HttpDelete("{prodId}")]
        public void DeleteProduct(int prodId)
        {
            _repo.DeleteProdById(prodId);
        }
    }
}