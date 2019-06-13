import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  navLinks = [
    { path: "button", label: "Button" },
    { path: "form", label: "Form" },
    { path: "stepper", label: "Stepper" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
