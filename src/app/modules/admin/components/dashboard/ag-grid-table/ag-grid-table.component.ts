import { ColDef } from "@ag-grid-community/core";
import { Component, Input } from "@angular/core";
import { ThemeService } from "../../../services/theme.service";

@Component({
    selector: 'ag-grid-table',
    templateUrl: 'ag-grid-table.component.html',
    styleUrls: ['ag-grid-table.component.scss']
})
export class AgGridTable {
    @Input() rowData: any;
    @Input() columnDef: any;
    theme:string= '';

    constructor(private themeService:ThemeService){
        this.themeService.theme.subscribe(theme => {
            this.theme = theme;
        })
    }

    defaultColDeff: ColDef = {
        // set the default column width
        width: 150,
        // make every column editable
        editable: true,
        // make every column use 'text' filter by default
        filter: 'agTextColumnFilter',
        // enable floating filters by default
        floatingFilter: true,
        // make columns resizable
        resizable: true,
        // disable cell data
    }

    defaultColGroupDef = {
        marryChildren: true,
    };
}