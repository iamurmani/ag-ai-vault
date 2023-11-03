import { inject } from "@angular/core";
import { Auth, GoogleAuthProvider, User, authState, createUserWithEmailAndPassword, signInWithPopup, signOut, user } from "@angular/fire/auth";
import { Subscription } from "rxjs";

export class AdminAuthService {
    private auth: Auth = inject(Auth);
    private provider = new GoogleAuthProvider();
    authState$ = user(this.auth);
    constructor() {
    
    }

    loginWithGoogle() {
        signInWithPopup(this.auth, this.provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // console.log(credential.user);
            // console.log(this.user$);
            return credential;
        })
    }

    signUpUserWithEmailAndPassword(email:string, password:string){
        return createUserWithEmailAndPassword(this.auth,email, password);
    }

    logout() {
        return signOut(this.auth);
    }
}