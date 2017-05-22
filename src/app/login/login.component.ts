import { Component, OnInit, Inject, NgZone, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService, NavigationService, APP_CONFIG, Config } from 'ontimize-web-ng2';

@Component({
  moduleId: module.id,
  selector: 'login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: any;
  user: FormControl;
  password: FormControl;
  sessionExpired = false;

  router: Router;

  constructor(
    private actRoute: ActivatedRoute,
    private zone: NgZone,
    router: Router,
    @Inject(NavigationService) public navigation: NavigationService,
    @Inject(LoginService) private loginService: LoginService,
    public injector: Injector) {

    this.router = router;

    let qParamObs: Observable<any> = this.actRoute.queryParams;
    qParamObs.subscribe(params => {
      if (params) {
        let isDetail = params['session-expired'];
        if (isDetail === 'true') {
          this.sessionExpired = true;
        } else {
          this.sessionExpired = false;
        }
      }
    });

  }

  ngOnInit(): any {
    this.removeSessionToken();
    this.navigation.setVisible(false);

    // let userCtrl: FormControl = new FormControl('', Validators.required);
    // let pwdCtrl: FormControl = new FormControl('', Validators.required);

    let userCtrl: FormControl = new FormControl();
    let pwdCtrl: FormControl = new FormControl();

    this.loginForm = new FormGroup({});
    this.loginForm.addControl('username', userCtrl);
    this.loginForm.addControl('password', pwdCtrl);

    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['../'], { relativeTo: this.actRoute });
    }
  }

  login() {

    if (!this.loginForm.valid) {
      alert('Campos no válidos');
    }

    let userName = this.loginForm.value['username'];
    let password = this.loginForm.value['password'];
    if (userName && userName.length > 0 && password && password.length > 0) {
      let self = this;
      this.loginService.login(userName, password)
        .subscribe(() => {
          self.sessionExpired = false;
          self.router.navigate(['../'], { relativeTo: this.actRoute });
        }, this.handleError);
    }
  }

  handleError(error) {
    switch (error.status) {
      case 401:
        console.error('Email or password is wrong.');
        break;
      default: break;
    }
  }

  removeSessionToken() {
    let appConf: Config = this.injector.get(APP_CONFIG);
    let token = appConf.uuid;
    localStorage.setItem(token, JSON.stringify({}));
  }

}
