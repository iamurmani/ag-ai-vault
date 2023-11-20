import { ChangeDetectorRef, Component, OnDestroy } from "@angular/core";
import { AdminAuthService } from "../../services/admin-auth.service";
import { Router } from "@angular/router";
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
    selector:'admin-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    sideNavOpened = false;
    private _mobileQueryListener: () => void;
    constructor(private adminAuthService:AdminAuthService, private router: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
      }

    logout(){
        this.adminAuthService.logout().then(() => {
            this.router.navigate(['admin/signin']);
            console.log('signed out');
        }).catch((error) => {
            console.log('sign out error: ' + error);
        });
    }
    
    toggleSideNav(event:any){
        this.sideNavOpened = event;
    }
}