import { Component } from "@angular/core";

@Component({
    selector:'admin-signup',
    templateUrl:'admin-sign-up.component.html',
    styleUrls:['admin-sign-up.component.scss']
})
export class AdminSignUpComponent {
    showForm:boolean = false;

    updateShowForm(){
        this.showForm = !this.showForm;
    }
}