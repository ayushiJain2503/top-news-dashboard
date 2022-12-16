import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces';
import { AuthServiceService } from 'src/app/services';
import { login } from 'src/app/store/action/login.action';
import { getLoggedInUser } from 'src/app/store/reducer/login.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public loginInvalid: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.store.select(getLoggedInUser).subscribe((data) => {
      if (!data.isLoadingSuccess && data.user?.username?.length) {
        this.loginInvalid = true;
      }
    });
  }

  /**
   * Function to login user with the form details entered by the user
   */
  public login(): void {
    this.loginInvalid = false;
    if (this.loginForm.valid) {
      const name = this.loginForm.get('username').value;
      const pwd = this.loginForm.get('password').value;
      const userData: User = { username: name, password: pwd };
      this.store.dispatch(login({ user: userData }));
      this.authService.loginUser(userData);
    }
  }
}
