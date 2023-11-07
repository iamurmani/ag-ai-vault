import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'users-data',
    templateUrl: 'users-data.component.html',
    styleUrls: ['users-data.component.scss']
})

export class UsersDataComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    columnDef = [
        {
            field: 'id',
            headerName: 'Id',
            sortable: true, filter: 'agTextColumnFilter', floatingFilter: true, resizable: true
        },
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 150,
            sortable: true, filter: 'agTextColumnFilter', floatingFilter: true, resizable: true
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            width: 150,
            sortable: true, filter: 'agTextColumnFilter', floatingFilter: true, resizable: true
        },
        {
            field: 'email',
            headerName: 'Email Id',
            width: 150,
            sortable: true, filter: 'agTextColumnFilter', floatingFilter: true, resizable: true
        },
        {
            field: 'status',
            headerName: 'Status',
            sortable: true, filter: 'agTextColumnFilter', floatingFilter: true, resizable: true
        }
    ]

    users = [
        {
            id: 1,
            firstName: 'Mani',
            lastName: 'E',
            email: 'mani@gmail.com',
            status: 'Active',

        },
        {
            id: 2,
            firstName: 'Mani',
            lastName: 'E',
            email: 'mani@gmail.com',
            status: 'Active',

        },
        {
            id: 3,
            firstName: 'Mani',
            lastName: 'E',
            email: 'mani@gmail.com',
            status: 'Active',

        },
        {
            id: 4,
            firstName: 'Mani',
            lastName: 'E',
            email: 'mani@gmail.com',
            status: 'Active',

        }
    ]
}