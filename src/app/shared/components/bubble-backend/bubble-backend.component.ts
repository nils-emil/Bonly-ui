import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-bubble-backend',
  templateUrl: './bubble-backend.component.html',
  styleUrls: ['./bubble-backend.component.scss'],
})
export class BubbleBackendComponent implements OnInit {
  public ribbons: any[] = [
    {left: 5, top: 0},
    {left: 82, top: 15},
    {left: 10, top: 45},
    {left: 40, top: 65},
    {left: 10, top: 90},
  ];
  public largeBubbles:  any[] = [
    {left: 90, top: 70},
    {left: 70, top: 80},
    {left: 0, top: 0},
    {left: 20, top: 5}
  ];
  public smallBubbles: any[] = [
    {left: 80, top: 5},
    {left: 60, top: -20},
    {left: 5, top: 40},
    {left: 90, top: 20}
  ];
  public triangles: any[] = [
    {type: 'UP', left: 20, top: 10},
    {type: 'LEFT', left: 90, top: 5},
    {type: 'UP', left: 70, top: 20},
    {type: 'UP', left: 0, top: 28},
    {type: 'LEFT', left: 66, top: 42},
    {type: 'RIGHT', left: 15, top: 55},
    {type: 'DOWN', left: 80, top: 60},
    {type: 'RIGHT', left: 20, top: 75},
    {type: 'RIGHT', left: 70, top: 80}
  ];


  constructor() {

  }

  ngOnInit(): void {
  }
}
