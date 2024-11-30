import { Component, Input, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: 'app-header',
    imports: [FormsModule],
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})

export class HeaderComponent {

    @Input() searchQuery: string = '';

    constructor(private auth: AuthService, private router: Router) { }

    logOut() {
        this.auth.logout();
    }

    onSearch() {
        console.log('Search Query:', this.searchQuery);
        this.router.navigate(['/dashboard'], { queryParams: { query: this.searchQuery } });
    }
}