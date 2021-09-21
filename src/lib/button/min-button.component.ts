import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'button[min-button]',
  exportAs: 'matButton',
  templateUrl: './min-button.component.html',
  styleUrls: ['./min-button.component.scss'],
})
export class MinButton implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
