import { NgModule } from "@angular/core";
import { AdminSignInComponent } from "./components/admin-sign-in/admin-sign-in.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/materila.module";
import { SharedModule } from "../shared/shared.module";
import { AdminSignUpComponent } from "./components/admin-sign-up/admin-sign-up.component";
import { AdminAuthService } from "./services/admin-auth.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ToolsTableComponent } from "./components/dashboard/tools-table/tools-table.component";

@NgModule({
    declarations:[
        AdminSignInComponent,
        AdminSignUpComponent,
        DashboardComponent,
    ],
    exports:[
        AdminSignInComponent,
        AdminSignUpComponent,
        DashboardComponent,
    ],
    imports:[
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        SharedModule
    ],
    providers:[AdminAuthService]
})
export class AdminModule {

} 