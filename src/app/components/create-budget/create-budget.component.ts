import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector   : 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls  : ['./create-budget.component.scss']
})
export class CreateBudgetComponent implements OnInit {

  public selectedExpenditureType: string       = 'Single';
  public formName: FormGroup                   = new FormGroup({});
  public singleExpenditureForm: FormGroup<any> = new FormGroup({
    expenditureName       : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    expenditureAmount     : new FormControl(0, [Validators.required]),
    expenditureDate       : new FormControl(new Date(), [Validators.required]),
    expenditureType       : new FormControl('', [Validators.required]),
    expenditureDescription: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(300)]),
    expenditureCategory   : new FormControl('', [Validators.minLength(3)]),
    expenditurePaidBy     : new FormControl('', [Validators.required]),
    // expenditureDuration   : new FormControl(1, [this.expenditureDurationRequired]),
    // emiCost               : new FormControl(0, [this.expenditureDurationRequired, Validators.minLength(1), Validators.maxLength(10)]),
  });
  public recurringExpenditureForm              = new FormGroup({
    expenditureName       : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    expenditureAmount     : new FormControl(0, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    expenditureDate       : new FormControl(new Date(), [Validators.required]),
    expenditureDescription: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(300)]),
    expenditureType       : new FormControl('', [Validators.required]),
    expenditureCategory   : new FormControl('', [Validators.minLength(3)]),
    expenditurePaidBy     : new FormControl('', [Validators.required]),
    expenditureDuration   : new FormControl(1, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
  });

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.singleExpenditureForm.value);
    console.log(this.recurringExpenditureForm.value);
  }

  public radioSelectExpenditureType() {
    if (this.selectedExpenditureType === 'Single') {
      this.singleExpenditureForm.reset();
      this.singleExpenditureForm.setValue({
        expenditureAmount     : 0,
        expenditureCategory   : '',
        expenditureDescription: '',
        expenditureName       : '',
        expenditurePaidBy     : '',
        expenditureType       : '',
        expenditureDate       : new Date()
      });
    } else if (this.selectedExpenditureType === 'Recurring') {
      this.recurringExpenditureForm.reset();
      this.recurringExpenditureForm.setValue({
        expenditureAmount     : 0,
        expenditureCategory   : '',
        expenditureDescription: '',
        expenditureDuration   : 1,
        expenditureName       : '',
        expenditurePaidBy     : '',
        expenditureType       : '',
        expenditureDate       : new Date()
      });
    }
  }

  private expenditureDurationRequired(control: AbstractControl): ValidationErrors | null {
    const expenditureType: string = control.parent?.get('expenditureType')?.value;
    if (expenditureType === 'Recurring') {
      return {expenditureDurationRequired: true};
    }
    return null;
  }

}
