import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product.model";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe(products => {
      this.products = products;
      console.log(this.products);
    })
  }

}
