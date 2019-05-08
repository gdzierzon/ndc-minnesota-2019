using System.ComponentModel.DataAnnotations.Schema;
using BudgetService.API.Models.Dto;
using Microsoft.EntityFrameworkCore;

namespace BudgetService.API.Models.DataContext
{
    public class BudgetContext : DbContext
    {
        public BudgetContext(DbContextOptions<BudgetContext> options)
            : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Expense> Expenses { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}