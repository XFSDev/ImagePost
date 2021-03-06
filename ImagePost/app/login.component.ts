﻿import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(private loginService: LoginService, private router: Router) { }

    userName = '';
    password = '';

    login(): void {
        this.loginService.login(this.userName, this.password)
            .then(result => {
                if (result.Success) {
                    this.router.navigate(['/feed']);
                } else {
                    alert(result.Message);
                }
            });
    }
}