using System.Collections.Generic;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;

namespace BookAndCanvas.Repositories {
  public interface IUsersRepository {
    Users AddNewUsers(NewUsersDTO newUser);
    IEnumerable<Users> GetAllUsers();

    Users GetUser(int id);
    Users GetUserByEmail(string email);
  }
}