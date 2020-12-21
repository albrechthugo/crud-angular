import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  @Input() // recebe do pai o produto a ser editado
  productEditable: Product;

  product: Product = {
    name: '',
    description: '',
    price: null,
    specifications: '',
  }

  constructor(private productService: ProductService, private sharedService: SharedService,private router: Router) {}

  ngOnInit(): void {
    this.product = this.productEditable;
  }

  closeModal() {
    this.onClose.emit(true);
  }

  handleEditClick() {
    this.productService.editProduct(this.product).subscribe(() => {
      this.sharedService.showConfirmationPopUp('Produto EDITADO com sucesso!');
      this.closeModal();
    });
  }

}
