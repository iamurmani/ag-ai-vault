import { Component } from "@angular/core";
import { AdminAuthService } from "../../services/admin-auth.service";
import { Router } from "@angular/router";

@Component({
    selector:'admin-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.scss']
})
export class DashboardComponent {
    constructor(private adminAuthService:AdminAuthService, private router: Router){

    }
    logout(){
        this.adminAuthService.logout().then(() => {
            this.router.navigate(['admin/signin']);
            console.log('signed out');
        }).catch((error) => {
            console.log('sign out error: ' + error);
        });
    }
}