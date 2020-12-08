import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  @Input()
  productEditable: any;

  openModal: boolean = false;

  product: Product = {
    name: '',
    description: '',
    price: null,
    specifications: '',
  }

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  closeModal() {
    this.onClose.emit(true);
  }

  handleEditClick(): void {
    this.product = this.productEditable;
    this.productService.editProduct(this.product).subscribe(() => {
      this.productService.showConfirmationPopUp('Produto EDITADO com sucesso!');
      this.closeModal();
    });
  }

}