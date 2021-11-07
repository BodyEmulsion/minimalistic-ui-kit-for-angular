import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'button[min-button], a[min-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
