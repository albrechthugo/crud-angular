import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements AfterViewInit {

  @ViewChild('menu')
  mobileMenu: ElementRef;

  @ViewChild('openMenu')
  openMenu: ElementRef;

  @ViewChild('closeMenu')
  closeMenu: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.openMenu.nativeElement.addEventListener('click', () => {
      this.mobileMenu.nativeElement.classList.add('menu-open')
    })

    this.closeMenu.nativeElement.addEventListener('click', () => {
      this.mobileMenu.nativeElement.classList.remove('menu-open')
    })
  }
}
