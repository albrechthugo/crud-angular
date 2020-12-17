import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/modules/shared/shared.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.changePageTitle('Página não encontrada | 404');

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3500)
  }

}
