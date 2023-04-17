import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
length!: number;
width!: number;
result!: number;

calculate(): void {
this.result = this.length*this.width;
}
}
