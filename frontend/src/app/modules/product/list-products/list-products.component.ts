import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product.model";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {

  loadingProductList: boolean = false;

  openModal: boolean = false;

  emptyCart: boolean = false;

  productEditable: Product;

  products: Product[];

  product: Product = {
    name: '',
    price: null,
    description: '',
    specifications: ''
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe(products => {
      this.products = products;
    });

    this.productService.getProductList().subscribe(products => {
      if (products != null) {
        this.loadingProductList = true;
      }

      if(products.length == 0) {
        this.emptyCart = true;
      }
    });
  }

  // ngOnChanges(changes: Product): void {}

  activeDeactiveModal(product): void {
    this.productEditable = product;
    this.openModal = !this.openModal;
  }

  modalClosed(isClosed) {
    this.openModal = false;
  }

  handleDeleteClick(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.productService.showConfirmationPopUp('Produto DELETADO com sucesso!');
    });
  }

}
