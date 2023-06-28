import { Component } from '@angular/core';

export interface Data {
  name: string;
  dateOfBirth: string;
  age: string;
  currency: string;
  weight: number;
}

export const data: Data[] = [
  {
    name: 'John Doe',
    dateOfBirth: '1990-05-15',
    age: '1985-10-22',
    currency: '1234.56',
    weight: 22.5,
  },
  {
    name: 'Jane Smith',
    dateOfBirth: '1988-02-28',
    age: '1983-12-05',
    currency: '5678.90',
    weight: 22,
  },
  {
    name: 'Michael Johnson',
    dateOfBirth: '1975-07-10',
    age: '1972-04-18',
    currency: '987.65',
    weight: 63.8,
  },
  {
    name: 'Emily Davis',
    dateOfBirth: '1993-09-21',
    age: '1990-06-14',
    currency: '4321.09',
    weight: 40,
  },
  {
    name: 'John Doe',
    dateOfBirth: '1990-05-15',
    age: '1985-10-22',
    currency: '1234.56',
    weight: 70,
  },
  {
    name: 'Jane Smith',
    dateOfBirth: '1988-02-28',
    age: '1983-12-05',
    currency: '5678.90',
    weight: 71,
  },
  {
    name: 'Michael Johnson',
    dateOfBirth: '1975-07-10',
    age: '1972-04-18',
    currency: '987.65',
    weight: 50,
  },
  {
    name: 'Emily Davis',
    dateOfBirth: '1993-09-21',
    age: '1990-06-14',
    currency: '4321.09',
    weight: 111,
  },
  {
    name: 'John Doe',
    dateOfBirth: '1990-05-15',
    age: '1985-10-22',
    currency: '1234.56',
    weight: 90,
  },
  {
    name: 'Jane Smith',
    dateOfBirth: '1988-02-28',
    age: '1983-12-05',
    currency: '5678.90',
    weight: 55,
  },
  {
    name: 'Michael Johnson',
    dateOfBirth: '1975-07-10',
    age: '1972-04-18',
    currency: '987.65',
    weight: 90,
  },
  {
    name: 'Emily Davis',
    dateOfBirth: '1993-09-21',
    age: '1990-06-14',
    currency: '4321.09',
    weight: 90,
  },
];
@Component({
  selector: 'app-pipes-list',
  templateUrl: './pipes-list.component.html',
  styleUrls: ['./pipes-list.component.scss'],
})
export class PipesListComponent {
  public displayedColumns: string[] = [
    'name',
    'dateOfBirth',
    'age',
    'currency',
    'weight',
  ];
  public dataSource = data;
}
