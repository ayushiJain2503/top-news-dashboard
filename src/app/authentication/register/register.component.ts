import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces';
import { AuthServiceService } from 'src/app/services';
import { register } from 'src/app/store/action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  resgisterForm: FormGroup;
  public loginInvalid: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.resgisterForm = this.fb.group({
      id: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   * Register user with the form details filled by user.
   */
  public register(): void {
    if (this.resgisterForm.valid) {
      try {
        const name = this.resgisterForm.get('username').value;
        const pwd = this.resgisterForm.get('password').value;
        const userData: User = { username: name, password: pwd };
        this.store.dispatch(register({ user: userData }));
        this.authService.registerUser(userData);
      } catch (err) {
        this.loginInvalid = true;
      }
    }
  }
}
