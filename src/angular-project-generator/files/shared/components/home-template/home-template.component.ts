import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HomeTemplate } from './home-template.model';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss'],
})
export class HomeTemplateComponent {
  @Input('title') public title: string;
  @Input('cards') public cards: HomeTemplate[];

  public constructor(private readonly router: Router) {}

  public navigateOnPage(path: string): void {
    this.router.navigate([path]);
  }
}
