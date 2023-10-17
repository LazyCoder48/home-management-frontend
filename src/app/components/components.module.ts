import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { BudgetComponent } from './budget/budget.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    ComponentsComponent,
    BudgetComponent,
    CreateBudgetComponent
  ],
  imports     : [
    CommonModule,
    ComponentsRoutingModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    InputTextModule,
    CheckboxModule,
    CalendarModule,
    InputTextareaModule
  ]
})
export class ComponentsModule {
}
