import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeC',
  templateUrl: './homeC.component.html',
  styleUrls: ['./homeC.component.css']
})
export class HomeCComponent implements OnInit {
  message = "I'm read only!";
  canEdit = false;
  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
