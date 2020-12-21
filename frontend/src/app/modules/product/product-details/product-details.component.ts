import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product: Product;
  paramId: number;
  params: any;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.params = params.get('id');
      this.params = parseInt(this.params);
      this.paramId = this.params;
    })

    this.productService.getProductById(this.paramId).subscribe(product => {
      this.product = product;
    })
  }

}
