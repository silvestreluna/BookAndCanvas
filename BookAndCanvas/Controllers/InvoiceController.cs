using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookAndCanvas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        [HttpGet("user/{id}")]
        public IActionResult GetUserInvoices(int id)
        {
            var repo = new InvoiceRepo();
            var userInvoices = repo.GetInvoiceByUser(id);
            return Ok(userInvoices);

        }

        [HttpGet("{id}")]
        public IActionResult GetInvoiceByInvoiceId(int id)
        {
            var repo = new InvoiceRepo();
            var userInvoices = repo.GetInvoiceById(id);
            return Ok(userInvoices);

        }
    }
}