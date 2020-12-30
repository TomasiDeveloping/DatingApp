import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user';
import {Photo} from '../_modules/photo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getUsersWithRoles()  {
    return this.http.get<Partial<User[]>>(this.baseUrl + 'admin/users-with-roles');
  }

  getPhotosForApproval(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.baseUrl + 'admin/photos-to-moderate');
  }

  approvePhoto(photoId: number): any {
    return this.http.post(this.baseUrl + 'admin/approve-photo/' + photoId, {});
  }

  rejectPhoto(photoId: number): any {
    return this.http.post(this.baseUrl + 'admin/reject-photo/' + photoId, {});
  }

  updateUserRoles(username: string, roles: string[]): any {
    return this.http.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
  }
}
