import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector:'user',
    templateUrl:'user.component.html',
    styleUrls:['user.component.scss']
})
export class UserComponent {
    constructor(public dialogRef:MatDialogRef<UserComponent>,
        @Inject(MAT_DIALOG_DATA) public data:any){

    }

    closeDialog(){
        this.dialogRef.close();
    }
}