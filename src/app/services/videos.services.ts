import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, shareReplay } from "rxjs";
import { Video } from "../model/video.model";

@Injectable({
    providedIn: 'root'
})

export class VideosService {
    constructor(private http: HttpClient) { }

    addView(video: Video) {
        const newViewCount = video.views + 1;
        this.http.patch(`http://localhost:3000/videos/${video.id}`, { views: newViewCount }).subscribe();
    }

    getVideos(query: string = ''): Observable<Video[]> {
        return this.http.get<Video[]>('http://localhost:3000/videos').pipe(shareReplay(), map((videos: Video[]) => {
            return videos.filter(video => video.title.toLowerCase().includes(query.toLowerCase()));
        }));
    }

    getVideoById(id: string): Observable<Video> {
        return this.http.get<Video>(`http://localhost:3000/videos/${id}`).pipe(shareReplay());
    }
}
