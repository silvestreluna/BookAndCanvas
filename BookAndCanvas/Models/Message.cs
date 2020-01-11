using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string MsgText { get; set; }
        public DateTime MsgDate { get; set; }
        public int UserMsgId { get; set; }
        public bool IsRead { get; set; }
        public string From { get; set; }

    }
}
