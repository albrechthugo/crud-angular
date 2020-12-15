import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from "../product.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
    specifications: '',
    description: ''
  }

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  handleSubmitClick(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showConfirmationPopUp('Produto adicionado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  formatNumberToReal(): void {}
}
