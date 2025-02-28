import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'add-expense',component:AddExpenseComponent},
  {path: 'expenses',component:ExpenseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
