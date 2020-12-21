import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.changePageTitle('Confira nossos produtos já cadastrados');
  }

}
