import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from '../../../components/primary-button/primary-button';
import { Cart } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div class="bg-white shadow-md border border-white rounded-xl p-6 flex flex-col gap-6 relative">
      <div class="mx-auto">
        <img [src]="Product().image" class="w-[200px] h-[100px] object-contain" />

        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ Product().title }}</span>
          <span class="text-sm">{{ '$ ' + Product().price }}</span>
          <app-primary-button
            label="Add to Cart"
            class="mt-3"
            (btnClicked)="cartService.addToCart(Product())"
          />
        </div>

        <span
          class="absolute top-2 right-3 text-sm font-bold"
          [class]="Product().stock ? 'text-green-500' : 'text-red-500'"
        >
          @if(Product().stock){ {{ Product().stock }} left } @else{Out of stock}
        </span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  cartService = inject(Cart);

  Product = input.required<Product>();
}
