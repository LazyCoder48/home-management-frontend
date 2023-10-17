import { Inject, Injectable, OnInit } from '@angular/core';
import { UserAuthError } from '../classes/user-auth-error';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(@Inject('route') private route: Route, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
  }

  public validateUser(): boolean {
    const loggedInUserString: string | null = localStorage.getItem('loggedInUser');
    console.log('loggedInUserString', loggedInUserString);
    if (loggedInUserString) {
      try {
        const loggedInUserObj = JSON.parse(loggedInUserString);
        if (loggedInUserObj) {
          const token = loggedInUserObj.token;
          if (token && token.length > 0) {
            // alert('token is there');
            this.isUserLoggedIn = true;
          }
        }
      } catch (e) {
        if (e instanceof SyntaxError) {
          console.warn('Invalid JSON in localStorage', e.message);
          console.error(e);
        } else {
          console.log('Unknown error occurred', e);
          throw new UserAuthError('Token is not there');
        }
      }
    } else {
      this.router.navigate(['/login']).then(r => {
        console.log('navigated to login', r);
        localStorage.removeItem('loggedInUser');
      });
    }
    return this.isUserLoggedIn;
  }


}
