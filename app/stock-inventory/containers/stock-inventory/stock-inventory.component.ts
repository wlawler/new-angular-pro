import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
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
    [products]="products"
    (added)="addStock($event)"></stock-selector> 
    <stock-products
    [parent]="form"
    (removed)="removeStock($event)"></stock-products>

    

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
  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),

    stock: this.fb.array([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 150 }),
    ])
  })

  constructor(
    private fb: FormBuilder
  ) {}
  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }
  addStock(stock) {
    const control = this.form.get('stock') as  FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index}: {group: FormGroup, index: number}) { 
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index) 
  }
  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}