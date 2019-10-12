import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/products.interface';

@Component({
     selector: 'stock-selector',
     styleUrls: ['stock-selector.component.scss'],
     template: `
     <div class="stock-selector" [formGroup]="parent">
       <div formGroupName="selector">
         <select formControlName="product_id">
           <option value=""> Select Stock</option>
           <option
           *ngFor="let products of products"
           [value]="products.id">
           {{products.name}}

           </option>
        </select>
        
        <stock-counter
        [step]="10"
        [min]="10"
        [max]="1000"
        formControlName="quantity" ></stock-counter>
        <button
         type="button"
         (click)="onAdd()">
          add stock
        </button>

       </div>
     </div> 
     `
})

export class StockSelectorComponent {
     @Input()
     parent: FormGroup;

     @Input()
     products: Product[];

     @Output()
     added = new EventEmitter<any> (); 
     
     onAdd(){
       this.added.emit(this.parent.get('selector').value);
       this.parent.get('selector').reset({
         product_id: '',
         quantity: 10
       });

     }
}