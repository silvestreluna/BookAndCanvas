﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookAndCanvas.DTOs
{
    public class NewMessageDTO
    {
        public int id { get; set; }
        public DateTime MsgDate { get; set; }
        public bool isRead { get; set; }
        public string MsgText { get; set; }
        public int userMsgId { get; set; }
        public string from { get; set; }

    }
}
