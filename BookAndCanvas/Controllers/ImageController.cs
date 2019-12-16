using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.DTOs;
using BookAndCanvas.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookAndCanvas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        //[HttpPost]
        //public void AddNewImg(NewImageDTO newImg)
        //{
        //    var repo = new ImagesRepo();
        //    repo.AddImage(newImg);
        //}

        [HttpPost]
        public IActionResult AddNewImg(NewImageDTO newImg)
        {
            var repo = new ImagesRepo();
            var addedImages = repo.AddImage(newImg);
            return Ok(addedImages);
        }
    }
}