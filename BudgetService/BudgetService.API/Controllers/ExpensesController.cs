using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BudgetService.API.Models.DataContext;
using BudgetService.API.Models.Dto;

namespace BudgetService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        private readonly BudgetContext _context;

        public ExpensesController(BudgetContext context)
        {
            _context = context;
        }

        // GET: api/Expenses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Expense>>> GetExpenses()
        {
            return await _context.Expenses.ToListAsync();
        }

        // GET: api/Expenses
        [HttpGet("page")]
        public async Task<ActionResult<IEnumerable<Expense>>> GetExpensesPage(int page, int size)
        {
            int startPage = page - 1;
            int skip = startPage * size;
            return await _context.Expenses
                .Skip(skip)
                .Take(size)
                .ToListAsync();
        }

        // GET: api/Expenses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Expense>> GetExpense(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);

            if (expense == null)
            {
                return NotFound();
            }

            return expense;
        }

        // PUT: api/Expenses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExpense(int id, Expense expense)
        {
            if (id != expense.ExpenseId)
            {
                return BadRequest();
            }

            _context.Entry(expense).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpenseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // PATCH: api/Expenses/5
        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchExpense(int id, Expense expense)
        {
            if (id != expense.ExpenseId)
            {
                return BadRequest();
            }

            var item = await _context.Expenses.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            if (expense.Date.HasValue) item.Date = expense.Date;
            if (expense.Amount.HasValue) item.Amount = expense.Amount;
            if (expense.Title != null) item.Title = expense.Title;
            if (expense.Description != null) item.Description = expense.Description;
            if (expense.Vendor != null) item.Vendor = expense.Vendor;
            if (expense.IsBusinessExpense.HasValue) item.IsBusinessExpense = expense.IsBusinessExpense;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return NoContent();
        }

        // POST: api/Expenses
        [HttpPost]
        public async Task<ActionResult<Expense>> PostExpense(Expense expense)
        {
            try
            {
                _context.Expenses.Add(expense);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetExpense", new { id = expense.ExpenseId }, expense);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        // DELETE: api/Expenses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Expense>> DeleteBudgetItem(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if (expense == null)
            {
                return NotFound();
            }

            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();

            return expense;
        }

        private bool ExpenseExists(int id)
        {
            return _context.Expenses.Any(e => e.ExpenseId == id);
        }
    }
}
