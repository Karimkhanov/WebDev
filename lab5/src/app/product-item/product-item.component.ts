import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any
  @Output() likesUpdate = new EventEmitter<number>();
  @Output() deleteUpdate = new EventEmitter();

  heart = faHeart;
  clicked: boolean = false;


  formatedPrice(price: number): string {
    return price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
  }

  handleLike(): void {
    if (this.clicked) {
      this.product.likes--;
      this.likesUpdate.emit(this.product.likes);
      this.clicked = false;
      return;
    }
    this.product.likes++;
    this.likesUpdate.emit(this.product.likes);
    this.clicked = true;
  }

  handleDelete(): void {
    this.deleteUpdate.emit(this.product.id);
  }
}
