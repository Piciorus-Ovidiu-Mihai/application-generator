import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataTableColDef } from 'src/shared/components/data-table/interfaces/col-def.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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
  public rows: BehaviorSubject<any> = new BehaviorSubject([]);
  public rows$: Observable<any> = this.rows.asObservable();
  public newrows: any = [
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
  ]

  public ngOnInit(): void {
    this.rows.next([
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
    ])

    this.newrows = [
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
    ]
  }
}
