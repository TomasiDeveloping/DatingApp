import { Component, OnInit } from '@angular/core';
import {Photo} from '../../_modules/photo';
import {AdminService} from '../../_services/admin.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
  photos: Photo[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getPhotosForApproval();
  }

  getPhotosForApproval(): void {
    this.adminService.getPhotosForApproval().subscribe(photos => {
      this.photos = photos;
    });
  }

  approvePhoto(photoId): void {
    this.adminService.approvePhoto(photoId).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoId), 1);
    });
  }

  rejectPhoto(photoId): void {
    this.adminService.rejectPhoto(photoId).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoId), 1);
    });
  }

}
