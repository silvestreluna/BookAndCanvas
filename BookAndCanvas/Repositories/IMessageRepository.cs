using System.Collections.Generic;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;

namespace BookAndCanvas.Repositories
{
    public interface IMessageRepository
    {
        Message AddNewMessage(NewMessageDTO AddNewMessage);

        IEnumerable<Message> GetAllMessages();
 
        Message GetMessage(int id);
    }
}