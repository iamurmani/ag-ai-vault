import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector:'category',
    templateUrl:'category.component.html',
    styleUrls:['category.component.scss']
})
export class CategoryComponent {
    constructor(public dialogRef: MatDialogRef<CategoryComponent>,
       @Inject(MAT_DIALOG_DATA) public data:any ){

    }

    closeDialog(){
        this.dialogRef.close();
    }
}