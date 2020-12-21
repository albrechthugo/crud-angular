import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.changePageTitle('Home | Cadastro de Produtos');
  }

}
