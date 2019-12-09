using System.Collections.Generic;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;
using BookAndCanvas.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookAndCanvas.Controllers {
  [Route("api/[controller]")] [ApiController]
  public class UsersController: ControllerBase {
    private readonly ILogger<UsersController> _logger;
    private readonly IUsersRepository _repo;

    public UsersController(ILogger<UsersController> logger, IUsersRepository repo) {
      _logger = logger;
      _repo = repo;
    }


    [HttpGet] public IEnumerable<Users> GetAll() { return _repo.GetAllUsers(); }

    [HttpGet("{id}")] public ActionResult<Users> GetById(int id) { return _repo.GetUser(id); }

    [HttpGet("email/{email}")] public ActionResult<Users> GetByEmail(string email) {
      return _repo.GetUserByEmail(email);
    }

    [HttpPost] public IActionResult CreateUser(NewUsersDTO AddNewUser) {
      var newUser = new Users {
        FName = AddNewUser.FName,
        LName = AddNewUser.LName,
        Email = AddNewUser.Email,
        Phone = AddNewUser.Phone,
        ImgUrl = AddNewUser.ImgUrl,
        Bio = AddNewUser.Bio
      };

      var repo = new UsersRepo();
      var userThatGotCreated = repo.AddNewUsers(AddNewUser);

      return Created($"api/users/{userThatGotCreated.FName}", userThatGotCreated);
    }

    [HttpPut("{id}")] public IActionResult UpdateUser(UpdateUserDTO updatedThisUser, int id) {
      var updatedUser = new Users {
        FName = updatedThisUser.FName,
        LName = updatedThisUser.LName,
        Email = updatedThisUser.Email,
        Phone = updatedThisUser.Phone,
        ImgUrl = updatedThisUser.ImgUrl,
        Bio = updatedThisUser.Bio
      };

      var repo = new UsersRepo();

      var userThatGotUpdated = repo.Update(updatedUser, id);

      return Ok(userThatGotUpdated);
    }

    [HttpDelete("{id}")] public IActionResult DeleteTrainer(int id) {
      var repo = new UsersRepo();
      repo.Remove(id);

      return Ok();
    }
  }
}