import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
// import {Product} from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private imgUrl = 'http://placehold.it/320x150';

  private products: Array<Product>;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}


