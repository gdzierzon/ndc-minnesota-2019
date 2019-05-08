using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BudgetService.API.Models.Dto
{
    [Table("Category")]
    public class Category
    {
        public int CategoryId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}