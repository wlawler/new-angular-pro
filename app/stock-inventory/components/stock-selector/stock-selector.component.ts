import { Component, Input } from '@angular/core';
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
           [value]="product.id">
           {{product.name}}

           </option>
        </select>
        <input 
        type="number"
        step="10"
        min="10"
        max="1000"
        formControlName="quantity">
        <button type="button>
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
}