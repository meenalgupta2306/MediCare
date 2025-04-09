import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  user: any = {};
  checkingLogInStatus = false;
  showErrorMessage = false;

  constructor(
    private authService: AuthService,
    // private _cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  login() {
    /* this._cookieService.delete("qrCode");
    this._cookieService.delete("passCode");
    delete this.user.qrCode;
    delete this.user.passCode;
    this.authService.login(this.user).subscribe((res: any) => {
      if (res.status === "FAILED") {
        // Add code for handling failure
        this.showErrorMessage = true;
      } else {
        if (this.user.RememberMe) {
          this._cookieService.set("username", this.user.Username, 7);
          const password = CryptoJS.AES.encrypt(
            this.user.Password.trim(),
            this.user.Username.trim()
          ).toString();
          this._cookieService.set("password", password, 7);
          this._cookieService.set("remember", this.user.RememberMe, 7);
        } else {
          this._cookieService.delete("username");
          this._cookieService.delete("password");
          this._cookieService.delete("remember");
          this._cookieService.delete("role");
        }
        this.authService.routeUserToDestination();
      }
    }); */
  }

}
