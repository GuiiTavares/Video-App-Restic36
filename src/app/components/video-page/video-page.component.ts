import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VideosService } from "../../services/videos.services";
import { Video } from "../../model/video.model";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { DomSanitizer } from "@angular/platform-browser";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-video-page',
    standalone: true,
    imports: [CommonModule, HeaderComponent],
    templateUrl: './video-page.component.html',
})

export class VideoPageComponent implements OnInit {

    videoId?: string;
    video$?: Observable<Video>
    auth: any;

    constructor(private activatedRoute: ActivatedRoute, private videosServices: VideosService, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            if (params['id']) {
                this.videoId = params['id'].toString();
                this.video$ = this.videosServices.getVideoById(this.videoId!);
            }
        });

        this.video$?.subscribe(video => {
            this.videosServices.addView(video);
        });
    }

    loadVideo(url?: string) {
        if (!url) return '';
        const videoId = url.split('?v=')[1]?.split('&')[0];
        const newUrl = `https://www.youtube.com/embed/${videoId}`
        return this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
    }
}