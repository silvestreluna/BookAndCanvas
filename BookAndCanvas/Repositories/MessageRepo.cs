using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using BookAndCanvas.DTOs;
using BookAndCanvas.Models;
using Dapper;

namespace BookAndCanvas.Repositories
{
    public class MessageRepo : IMessageRepository

    {
        string _connectionString = "Server=localhost;Database=BookAndCanvas;Trusted_Connection=True";
        public Message AddNewMessage(NewMessageDTO newMessage)
        {
            using (var db = new SqlConnection(_connectionString))

            {
                var sql = @"INSERT INTO Message
                                       ([MsgDate]
                                       ,[isRead]
                                       ,[MsgText]
                                       ,[UserMsgId] 
                                       ,[from]
                                       
                                                )
                                    output inserted.*
                                    VALUES
                                       (@MsgDate
                                       ,@isRead
                                       ,@MsgText
                                       ,@UserMsgId
                                       ,@from)";
                return db.QueryFirst<Message>(sql, newMessage);
            }
        }

        public IEnumerable<Message> GetAllMessages()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var messages = db.Query<Message>(@"Select * from Message");
                return messages.ToList();
            }
        }

        public Message GetMessage(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from Message
                            where Message.Id = @messageId";

                var message = db.QueryFirst<Message>(sql, new { messageId = id });
                return message;
            }
        }

        public bool Remove(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete 
                            from Message
                            where [id] = @id";

                return db.Execute(sql, new { id }) == 1;
            }
        }
    }
}