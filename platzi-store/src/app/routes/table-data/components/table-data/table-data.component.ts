import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastName'];
  dataArray: Student[] = [
    {
      id: 1,
      name: 'Jose Ramon',
      lastName: 'Vieites',
    },
    {
      id: 2,
      name: 'Luis David',
      lastName: 'Varela',
    },
    {
      id: 3,
      name: 'Damian',
      lastName: 'Lores',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
