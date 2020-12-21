import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product.model";
import { SharedService } from '../../shared/shared.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private productService: ProductService, 
              private sharedService: SharedService, 
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.products = this.activatedRoute.snapshot.data['products'];

    if(this.products != null) {
      this.loadingProductList = true;
    }

    if(this.products.length == 0) {
      this.emptyCart = true;
    }
  }
  
  activeDeactiveModal(product): void {
    this.productEditable = product;
    this.openModal = !this.openModal;
  }

  modalClosed(isClosed) {
    this.openModal = false;
  }

  handleDeleteClick(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.sharedService.showConfirmationPopUp('Produto DELETADO com sucesso!');
    });
  }
}
