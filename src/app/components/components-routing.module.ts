import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { BudgetComponent } from './budget/budget.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';

const routes: Routes = [
  {path: '', redirectTo: '/app/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: ComponentsComponent},
  {path: 'view-budgets', component: BudgetComponent, title: 'View Investments/Expenditures'},
  {path: 'new-budget', component: CreateBudgetComponent, title: 'Create Budget'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
