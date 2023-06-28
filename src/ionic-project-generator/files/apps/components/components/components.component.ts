import { Component } from '@angular/core';
import { DataTableColDef } from 'src/shared/components/data-table/interfaces/col-def.interface';
import { DetailsTableRow } from 'src/shared/components/details-table/details-table.component';
import { StackedListItem } from 'src/shared/components/stacked-list/stacked-list.util';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  public columns: DataTableColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
    },
    {
      headerName: 'First Name',
      field: 'firstName',
    },
    {
      headerName: 'Active',
      field: 'active',
    },
    {
      headerName: 'Date Of Birth',
      field: 'dateOfBirth',
    },
    {
      headerName: 'Created at',
      field: 'createdAt',
    },
  ];
  public rows: any[] = [
    {
      name: 'Jon',
      firstName: 'Doe',
      active: true,
      dateOfBirth: '02-02-1998',
      createdAt: '02-02-2020',
    },
    {
      name: 'Jon',
      firstName: 'Doe',
      active: true,
      dateOfBirth: '02-02-1998',
      createdAt: '02-02-2020',
    },
    {
      name: 'Jon',
      firstName: 'Doe',
      active: true,
      dateOfBirth: '02-02-1998',
      createdAt: '02-02-2020',
    },
    {
      name: 'Jon',
      firstName: 'Doe',
      active: true,
      dateOfBirth: '02-02-1998',
      createdAt: '02-02-2020',
    },
    {
      name: 'Jon',
      firstName: 'Doe',
      active: true,
      dateOfBirth: '02-02-1998',
      createdAt: '02-02-2020',
    },
    {
      name: 'Jon',
      firstName: 'Doe',
      active: true,
      dateOfBirth: '02-02-1998',
      createdAt: '02-02-2020',
    },
  ];
  public details: any = {
    name: 'Ovidiu Mihai',
    createAt: '21-06-2023',
    birth: '02-02-1998',
    job: 'Software Engineer',
    city: 'Cluj-Napoca',
    country: 'Romania',
  };
  public detailsRows: DetailsTableRow[] = [
    {
      key: 'Name',
      value: this.details.name,
    },
    {
      key: 'Created At',
      value: this.details.createAt,
    },
    {
      key: 'Birth',
      value: this.details.birth,
    },
    {
      key: 'Job',
      value: this.details.job,
    },
    {
      key: 'City',
      value: this.details.city,
    },
    {
      key: 'Country',
      value: this.details.country,
    },
  ];
  public fields: StackedListItem = {
    fields: [
      {
        property: 'name',
      },
      {
        property: 'date',
      },
    ],
  };
  public items: any[] = [
    {
      name: 'Ovidiu',
      date: '02-02-2023',
    },
    {
      name: 'Ovidiu',
      date: '02-02-2023',
    },
    {
      name: 'Ovidiu',
      date: '02-02-2023',
    },
    {
      name: 'Ovidiu',
      date: '02-02-2023',
    },
    {
      name: 'Ovidiu',
      date: '02-02-2023',
    },
  ];

  public functionMock(event: any): void {
    console.log(event);
  }
}
