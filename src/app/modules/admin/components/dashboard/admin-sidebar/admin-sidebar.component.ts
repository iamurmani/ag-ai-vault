import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'admin-sidebar',
    templateUrl:'admin-sidebar.component.html',
    styleUrls:['admin-sidebar.component.scss']
})
export class AdminSideBarComponent {

    constructor(private router:Router){

    }

    load(action:any) {
        switch(action) {
            case 'dashboard' :
                this.router.navigateByUrl('admin/dashboard');
                break;
            case 'tools' :
                this.router.navigateByUrl('admin/dashboard/tools');
                    break;
            case 'categories' :
                this.router.navigateByUrl('admin/dashboard/categories');
                break;
            case 'users' :
                this.router.navigateByUrl('admin/dashboard/users');
                break;
        }
    }
}