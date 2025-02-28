import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense = { category: '', description: '', amount: null, date: '' };

  constructor(private expenseService: ExpenseService, private router: Router) {}

  onSubmit() {
    this.expenseService.addExpense(this.expense).subscribe(() => {
      this.router.navigate(['/expenses']);
    });
  }
}