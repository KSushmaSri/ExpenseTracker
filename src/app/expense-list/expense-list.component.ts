import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: any[] = [];
  filteredExpenses: any[] = [];
  selectedFilter: string = 'all';

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.expenseService.getExpenses().subscribe(data => {
      this.expenses = data;
      this.applyFilter();
    });
  }

  applyFilter() {
    const now = new Date();
    if (this.selectedFilter === 'month') {
      this.filteredExpenses = this.expenses.filter(exp => 
        new Date(exp.date).getMonth() === now.getMonth() &&
        new Date(exp.date).getFullYear() === now.getFullYear()
      );
    } else if (this.selectedFilter === 'week') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(now.getDate() - 7);
      this.filteredExpenses = this.expenses.filter(exp => 
        new Date(exp.date) >= oneWeekAgo
      );
    } else {
      this.filteredExpenses = [...this.expenses]; // Show all
    }
  }

  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.expenses = this.expenses.filter(exp => exp.id !== id);
      this.applyFilter(); 
    });
  }
}
