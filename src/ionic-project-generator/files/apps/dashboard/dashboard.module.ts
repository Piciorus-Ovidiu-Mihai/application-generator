import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentTemplate } from 'src/shared/components/dashboard-component/dashboard-component.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forChild(routes), DashboardComponentTemplate],
})
export class DashboardModule {}
