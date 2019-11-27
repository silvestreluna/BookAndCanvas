using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;

namespace BookAndCanvas.Repositories
{
    public interface IUsersRepository
    {
        Users AddNewUsers(NewUsersDTO newUser);
        IEnumerable<Users> GetAllUsers();

         Users GetUser(int id);
    }
}

