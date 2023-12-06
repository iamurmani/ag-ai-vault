import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Catergory } from "../../models/category.model";

@Component({
    selector:'category',
    templateUrl:'category.component.html',
    styleUrls:['category.component.scss']
})
export class CategoryComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<CategoryComponent>,
       @Inject(MAT_DIALOG_DATA) public data:any ){

    }

    categoryForm!:FormGroup;
    categoryData = new Catergory();

    ngOnInit(): void {
        this.categoryForm = new FormGroup({
            name: new FormControl(this.categoryData.name, Validators.required),
            description: new FormControl(this.categoryData.description, Validators.required),
            status: new FormControl(this.categoryData.status, Validators.required),
        })
    }

    closeDialog(){
        this.dialogRef.close();
    }

    saveCategroy(){
        console.log(this.categoryForm);
    }
}