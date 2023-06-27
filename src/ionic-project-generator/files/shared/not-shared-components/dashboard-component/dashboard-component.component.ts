import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

export class DashboardTemplate{
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
}

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule, CommonModule]
})
export class DashboardComponentTemplate {
  @Input('title') public title: string;
  @Input('cards') public cards: DashboardTemplate[];

  public constructor(private readonly router: Router) {}

  public navigateOnPage(path: string): void {
    this.router.navigate([path]);
  }
}
