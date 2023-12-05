import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Tool } from "../../models/tool.model";

@Component({
    selector: 'tool',
    templateUrl: 'tool.component.html',
    styleUrls: ['tool.component.scss']
})
export class ToolComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<ToolComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,) { }
    categoriesAdded: any[] = [];
    selectedImage: any;
    selectedImageUrl: any;
    toolForm!: FormGroup;
    toolData:Tool = new Tool();
    categories = [
        {
            id: 1,
            name: 'Music'
        },
        {
            id: 2,
            name: 'Video'
        },
        {
            id: 1,
            name: 'Writing'
        },
        {
            id: 1,
            name: 'Singing'
        },
    ];

    ngOnInit(): void {
        this.toolForm = new FormGroup({
            name: new FormControl(this.toolData.name, Validators.required),
            description: new FormControl(this.toolData.description,Validators.required),
            category: new FormControl(this.toolData.category,Validators.required),
            companyName : new FormControl(this.toolData.companyName,Validators.required),
            url :new FormControl(this.toolData.url,Validators.required),
            status:new FormControl(this.toolData.status,Validators.required),
        });
    }


    removeCategory(id: any) {
        this.categoriesAdded = this.categoriesAdded.filter(x => x.id != id);
    }
    addCatergories(e: any) {
        this.categoriesAdded.push(e.option.value);
    }
    closeDialog() {
        this.dialogRef.close();
    }
    imageSelected(e: any) {
        let file = e.target.files[0];
        if (file) {
            this.selectedImage = file;
            this.readAndDisplayImage();
        }
    }

    readAndDisplayImage() {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.selectedImageUrl = e.target?.result;
        }
        reader.readAsDataURL(this.selectedImage);
    }

    clearImage() {
        this.selectedImage = undefined;
        this.selectedImageUrl = undefined;
    }

    saveTool() {
    console.log(this.toolForm);
    }
}

