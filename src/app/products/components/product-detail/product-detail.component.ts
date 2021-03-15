import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../interfaces/product';

import { ProductsService } from '../../../core/services/products/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/mug.png',
      price: 200,
      description: 'Este es un nuevo producto creado desde el ide vscode',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updatedProduct: Partial<Product> = {
      title: 'Edicion titulo desde angular',
      description: 'Este es un producto editado desde el ide vscode',
    };
    this.productsService
      .updateProduct('2', updatedProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService
      .deleteProduct('2')
      .subscribe(rta => {
        console.log(rta);
      });
  }

}
