import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-listed',
  templateUrl: './products-listed.component.html',
  styleUrls: ['./products-listed.component.scss'],
})
export class ProductsListedComponent implements OnInit {
  products: Product[];

  displayedColums: string[] = ['id', 'title', 'price', 'actions']

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts() {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((rta) => {
      this.products = this.products.filter(product => product.id !== id);
    })
  }
}
