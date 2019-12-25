using System.Collections.Generic;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;
using BookAndCanvas.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookAndCanvas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase {
        private readonly ILogger<MessageController> _logger;
        private readonly IMessageRepository _repo;
        public MessageController(ILogger<MessageController> logger, IMessageRepository repo) {
          _logger = logger;
          _repo = repo;
    }


    [HttpGet] public IEnumerable<Message> GetAllMessages() { return _repo.GetAllMessages(); }

    [HttpGet("{id}")] public ActionResult<Message> GetById(int id) { return _repo.GetMessage(id); }

    [HttpPost] public IActionResult AddNewMessage(NewMessageDTO AddNewMessage) {
      var newMessage = new Message {
        MsgDate = AddNewMessage.MsgDate,
        IsRead = AddNewMessage.isRead,
        MsgText = AddNewMessage.MsgText,
        UserMsgId = AddNewMessage.userMsgId,
        From = AddNewMessage.from,
      };

      var repo = new MessageRepo();
      var messageThatGotCreated = repo.AddNewMessage(AddNewMessage);

      return Created($"api/message/{messageThatGotCreated.MsgText}", messageThatGotCreated);
    }

    [HttpDelete("{id}")] public IActionResult DeleteMessage(int id) {
      var repo = new MessageRepo();
      repo.Remove(id);

      return Ok();
    }
    }
}