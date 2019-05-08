using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BudgetService.API.Models.Dto
{
    [Table("User")]
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}