import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector:'tool',
    templateUrl:'tool.component.html',
    styleUrls:['tool.component.scss']
})
export class ToolComponent {
    constructor(public dialogRef: MatDialogRef<ToolComponent>,
        @Inject(MAT_DIALOG_DATA) public data:any,){}
}