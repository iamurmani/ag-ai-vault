import { Component } from "@angular/core";
import { inject } from '@angular/core';
import { Auth, GoogleAuthProvider, User, signInWithPopup, signOut, user } from  '@angular/fire/auth';
import { AdminAuthService } from "../../services/admin-auth.service";
import { Router } from "@angular/router";
@Component({
    selector:'admin-sign-in',
    templateUrl :'./admin-sign-in.component.html',
    styleUrls:['./admin-sign-in.component.scss']

})
export class AdminSignInComponent{
    constructor(private adminAuthService:AdminAuthService, private router:Router){
        this.adminAuthService.authState$.subscribe((aUser: User | null) => {
            this.router.navigateByUrl('/admin/dashboard');
            console.log(aUser);
        })
    }

    loginWithGoogle(){
        this.adminAuthService.loginWithGoogle();
    }
}