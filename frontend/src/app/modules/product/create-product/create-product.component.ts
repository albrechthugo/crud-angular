import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { SharedService } from '../../shared/shared.service';
import { Product } from "../product.model";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  createProductForm: FormGroup;

  constructor(private productService: ProductService,
              private sharedService: SharedService,
              private router: Router,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createProductForm = this.formBuilder.group({
      productName: [
        `${this.product.name}`,
        Validators.required
      ],
      productDescription: [
        `${this.product.description}`,
        Validators.required
      ],
      productPrice: [
        `${this.product.price}`,
        Validators.required
      ],
      productSpecifications: [
        `${this.product.specifications}`,
        Validators.required
      ],
    });
  }

  handleSubmitClick(): void {
      this.productService.createProduct(this.product).subscribe(() => {
        this.sharedService.showConfirmationPopUp('Produto adicionado com sucesso!');
        this.router.navigate(['/products']);
      });
  }

  formatNumberToReal(): void {}
}
