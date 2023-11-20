import { Component, EventEmitter, Output } from "@angular/core";
import { ThemeService } from "../../../services/theme.service";

@Component({
    selector:'admin-header',
    templateUrl:'admin-header.component.html',
    styleUrls:['admin-header.component.scss']
})
export class AdminHeaderComponent {
    @Output() sideNav:EventEmitter<any>= new EventEmitter();
    theme:string = 'light';
    sideNavOpened:boolean = false;

    constructor(private themeService:ThemeService){}

    changeTheme(){
        if(this.theme == 'light') {
            this.theme = 'dark';
            document.body.classList.add('theme-alternate');
            this.themeService.theme.next('dark');
        } else {
            this.theme = 'light';
            document.body.classList.remove('theme-alternate');
            this.themeService.theme.next('light');
        }
    }
    openSideNav(){
        this.sideNavOpened = !this.sideNavOpened;
        this.sideNav.emit(this.sideNavOpened);
    }
}