import { ColDef } from "@ag-grid-community/core/dist/cjs/es5/entities/colDef";
import { Component } from "@angular/core";

@Component({
    selector:'category-data',
    templateUrl:'category-data.component.html',
    styleUrls:['category-data.component.scss']
})
export class CategoryDataComponent{
    rowDataa = [
        {
            id:1,
            name:"Chat Gpt",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        },
        {
            id:2,
            name:"Chat Gpt 2",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        },
        {
            id:3,
            name:"Chat Gpt 3",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        },
        {
            id:4,
            name:"Chat Gpt 4",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        },
        {
            id:5,
            name:"Chat Gpt 5",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        },
        {
            id:6,
            name:"Chat Gpt 6",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        },
        {
            id:7,
            name:"Chat Gpt 7",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        },
        {
            id:8,
            name:"Chat Gpt 8",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        },
        {
            id:9,
            name:"Chat Gpt 9",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        },
        {
            id:10,
            name:"Chat Gpt 10",
            description:"This is description",
            company:"Open Ai",
            category:"Multi purpose",
        }
    ]

    columnDefss: ColDef[] = [
		{field:"id", headerName:"ID", sortable:true,filter:'agTextColumnFilter',floatingFilter: true,resizable: true,},
        {field:"name", headerName:"Tool Name", width:150,sortable:true,filter:'agTextColumnFilter',floatingFilter: true,resizable: true,},
        {field:"description", headerName:"Description",width:180,sortable:true,filter:'agTextColumnFilter',floatingFilter: true,resizable: true,},
        {field:"company", headerName:"Company", width:150,sortable:true,filter:'agTextColumnFilter',floatingFilter: true,resizable: true,},
        {field:"category", headerName:"Category", width:150,sortable:true,filter:'agTextColumnFilter',floatingFilter: true,resizable: true,},
	];
}