import { BehaviorSubject } from "rxjs";

export class ThemeService {
    theme = new BehaviorSubject<string>('light');
}