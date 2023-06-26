import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input('color') public color: string = 'black';
  @Input('isLoading') public isLoading: boolean;
  @Input('type') public type: "spinner" | "loader" = "spinner";
}
