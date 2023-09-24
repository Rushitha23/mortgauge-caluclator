import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public dataC:FormGroup;
  public EstimatedAmount='00.0';
  public LoanAmount='00.0';

  constructor(
    private fb:FormBuilder
  ) {
    this.dataC = this.fb.group({
      purchasePrice:['',Validators.required],
      downPayment:['',Validators.required],
      interestRate:['',Validators.required],
      repaymentTime:['',[Validators.required,Validators.pattern("[0-9]+")]],
    });
   }

  ngOnInit(): void {
  }

  mortagageQuote(){
    var p = (this.dataC.value.purchasePrice - this.dataC.value.downPayment);
    var r = ((this.dataC.value.interestRate/100)/12);
    var n = (this.dataC.value.repaymentTime*12);

    var A = r*((1+r)**n);
    var B = ((1+r)**n)-1;
    var m=p*(A/B);

    this.LoanAmount = ''+p;

    this.EstimatedAmount = ''+m;
  }

}
