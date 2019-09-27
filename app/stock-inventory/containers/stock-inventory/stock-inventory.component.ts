import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../models/products.interface';


@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <stock-branch
    [parent]="form"></stock-branch>
    <stock-selector
    [parent]="form"
    [products]="products"></stock-selector> 
    <stock-products
    [parent]="form"></stock-products>

    

    <div class="stock-inventory__buttons">
      <button 
        type="submit"
        [disabled]="form.invalid">
        Order stock
      </button>
    </div>

    <pre>{{ form.value | json }}</pre>

  </form>
</div>
    
  `
})
export class StockInventoryComponent {

  products: Product[] = [
    { "id": 1, "price": 2800, "name": "mac book pro" },
    { "id": 2, "price": 500, "name": "cd burner" },
    { "id": 3, "price": 28000, "name": "new car" },
    { "id": 4, "price": 280, "name": "your mom" },
    { "id": 5, "price": 2805, "name": "your dad" },

  ];
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  })
  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}