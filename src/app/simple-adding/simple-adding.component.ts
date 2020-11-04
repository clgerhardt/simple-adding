import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple-adding',
  templateUrl: './simple-adding.component.html',
  styleUrls: ['./simple-adding.component.scss']
})
export class SimpleAddingComponent implements OnInit {
  result: number;

  addingForm = this.fb.group({
    firstNumber: 0,
    secondNumber: 0
  });

  get firstNumber(): number {
    return this.addingForm.value.firstNumber;
  }

  get secondNumber(): number {
    return this.addingForm.value.secondNumber;
  }

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addNumbers() {
    this.result = this.firstNumber + this.secondNumber;
  }
}
