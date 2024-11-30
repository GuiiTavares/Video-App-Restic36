import { Component, OnInit } from '@angular/core';
import { Video } from '../../model/video.model';
import { Observable } from "rxjs";
import { VideosService } from '../../services/videos.services';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  videos$?: Observable<Video[]>;
  query: string = '';

  constructor(private activatedRoute: ActivatedRoute, private videosServices: VideosService, private router: Router) { }

  getVideos() {
    this.query = this.activatedRoute.snapshot.queryParams['query'] ?? '';
    this.videos$ = this.videosServices.getVideos(this.query);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getVideos();
    });
  }

  openVideo(id: string) {
    this.router.navigate(['/video/', id]);

  }
}
