import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'mortgageCalculator', component:CalculatorComponent
      },
      {
        path:'**', redirectTo:'mortgageCalculator'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
