import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
