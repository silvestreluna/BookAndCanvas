using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http;
using System.Net.Http;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using Microsoft.IdentityModel.Protocols;

namespace BookAndCanvas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        //public HttpResponseMessage Get()
        //{
        //    DataTable table = new DataTable();

        //    string query = @"select EmployeeID, EmployeeName, Department, MailID, convert(varchar(10),DOH, 120) as DOH
        //                    from Employees";

        //    using (var con = new SqlConnection(ConfigurationManager<>.ConnectionStrings["EmployeeAppDB"].ConnectionString))
        //    using (var cmd = new SqlCommand(query, con))
        //    using (var da = new SqlDataAdapter(cmd))
        //    {
        //        cmd.CommandType = CommandType.Text;
        //        da.Fill(table);
        //    }

        //    return Request.CreateResponse(HttpStatusCode.OK, table);
        //}
    }
}