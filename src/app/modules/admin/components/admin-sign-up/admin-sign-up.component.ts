import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AdminAuthService } from "../../services/admin-auth.service";
import { Router } from "@angular/router";

@Component({
    selector:'admin-signup',
    templateUrl:'admin-sign-up.component.html',
    styleUrls:['admin-sign-up.component.scss']
})
export class AdminSignUpComponent {
    showForm:boolean = false;
    @ViewChild('form')signupForm:NgForm | undefined;
    
    constructor(private adminAuthService:AdminAuthService, private router:Router){

    }
    updateShowForm(){
        this.showForm = !this.showForm;
    }

    signUpWithEmail(form: NgForm){
        if(form.form.valid){
            this.adminAuthService.signUpUserWithEmailAndPassword(form.value.email,form.value.password).then(res => {
                this.router.navigateByUrl('/admin/dashboard');
            });
        }
    }
}