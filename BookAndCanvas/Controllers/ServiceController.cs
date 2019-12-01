using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.Models;
using BookAndCanvas.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookAndCanvas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        public IEnumerable<Service> GetServices()
        {
            var repo = new ServiceRepo();

            var allServices = repo.GetAllServices();

            return allServices;
        }
    }
}