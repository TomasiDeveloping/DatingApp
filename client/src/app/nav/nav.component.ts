import { Component, OnInit } from '@angular/core';
import {AccountService} from '../_services/account.service';
import {Observable} from 'rxjs';
import {User} from '../_models/user';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(
      response => {
        this.router.navigateByUrl('/members').then();
      }, error => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/').then();
  }
}