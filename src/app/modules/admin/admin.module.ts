import { NgModule } from "@angular/core";
import { AdminSignInComponent } from "./components/admin-sign-in/admin-sign-in.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/materila.module";
import { SharedModule } from "../shared/shared.module";
import { AdminSignUpComponent } from "./components/admin-sign-up/admin-sign-up.component";
import { AdminAuthService } from "./services/admin-auth.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ToolsDataComponent } from "./components/dashboard/tools-data/tools-data.component";
import { AdminHeaderComponent } from "./components/dashboard/admin-header/admin-header.component";
import { AdminSideBarComponent } from "./components/dashboard/admin-sidebar/admin-sidebar.component";
import { AdminOverviewComponent } from "./components/dashboard/admin-overview/admin-overview.component";
import { AgGridTable } from "./components/dashboard/ag-grid-table/ag-grid-table.component";
import { ThemeService } from "./services/theme.service";
import { UsersDataComponent } from "./components/dashboard/users-data/users-data.component";
import { CategoryDataComponent } from "./components/dashboard/category-data/category-data.component";
import { ToolComponent } from "./components/dashboard/dialogs/tool/tool.component";
import { CategoryComponent } from "./components/dashboard/dialogs/catergory/category.component";
import { UserComponent } from "./components/dashboard/dialogs/user/user.component";

@NgModule({
    declarations:[
        AdminSignInComponent,
        AdminSignUpComponent,
        DashboardComponent,
        AdminHeaderComponent,
        AdminSideBarComponent,
        AdminOverviewComponent,
        ToolsDataComponent,
        AgGridTable,
        UsersDataComponent,
        CategoryDataComponent,
        ToolComponent,
        CategoryComponent,
        UserComponent
    ],
    exports:[
        AdminSignInComponent,
        AdminSignUpComponent,
        DashboardComponent,
        AdminHeaderComponent,
        AdminSideBarComponent,
        AdminOverviewComponent,
        ToolsDataComponent,
        AgGridTable,
        UsersDataComponent,
        CategoryDataComponent,
        ToolComponent,
        CategoryComponent,
        UserComponent
    ],
    imports:[
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        SharedModule
    ],
    providers:[AdminAuthService, ThemeService]
})
export class AdminModule {

} 