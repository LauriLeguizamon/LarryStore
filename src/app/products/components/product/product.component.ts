import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../../interfaces/product';
import { Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product = {
    id: '',
    image: '',
    title: '',
    price: 0,
    description: '',
  };
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {
    console.log('1. constructor');
  }

  //   ngOnChanges(changes: SimpleChanges) {
  //       console.log('2. ngOnChanges');
  //       console.log(changes);
  //   }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);

  }
}
