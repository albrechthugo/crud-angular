import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product.model";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  loadingProductList: boolean = false;

  products: Product[];

  product: Product = {
    name: '',
    price: null,
    description: '',
    specifications: ''
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe(products => {
      this.products = products;
    })

    this.productService.getProductList().subscribe(products => {
      if(products != null) {
        this.loadingProductList = true;
      }
    })
  }

  handleEditClick(product: Product): void {
    this.productService.editProduct(product).subscribe(() => {
      this.productService.showConfirmationPopUp('Produto EDITADO com sucesso!');
    })
  }

  handleDeleteClick(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.productService.showConfirmationPopUp('Produto DELETADO com sucesso!');
    })
  }

}
