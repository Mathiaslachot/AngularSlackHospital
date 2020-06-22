import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testTwo',
  templateUrl: './testTwo.component.html',
  styleUrls: ['./testTwo.component.css']
})
export class TestTwoComponent implements OnInit {

  constructor() { }

  @Input() testTwo: any;

  ngOnInit(): void {
  }

}
