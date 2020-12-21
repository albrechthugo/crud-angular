import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {
  @Input()
  class: string;

  @Input()
  textContent: string;

  @Input()
  type: string;

  constructor() {}

  ngOnInit(): void {}

}
