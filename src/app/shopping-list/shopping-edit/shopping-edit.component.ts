import { Component, OnInit,ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild ('nameInput') inputNameRef: ElementRef;
@ViewChild ('amountInput') inputAmountRef: ElementRef;
@Output() ingredientAdded = new EventEmitter<{name:string, amount:number}>();
  constructor() { }

  ngOnInit(): void {
  }
onAddItem(){
  const ingName = this.inputNameRef.nativeElement.value;
  const ingAmount= this.inputAmountRef.nativeElement.value;
  const newIng = new ingredient(ingName, ingAmount);
  this.ingredientAdded.emit(newIng);
}
}