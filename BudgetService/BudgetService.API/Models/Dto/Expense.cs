using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BudgetService.API.Models.Dto
{
    [Table("BudgetItem")]
    public class Expense
    {
        [Column("BudgetItemId")]
        public int ExpenseId { get; set; }
        public int UserId { get; set; }
        public int CategoryId { get; set; }
        public DateTime? Date { get; set; }
        public decimal? Amount { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Vendor { get; set; }
        public bool? IsBusinessExpense { get; set; }


    }
}