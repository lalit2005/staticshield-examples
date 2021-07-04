import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'staticshield-angular-example';

  ngOnInit(): void {
    const script = document.createElement("script")
    script.type = 'text/javascript';
    script.src = 'https://staticshield.vercel.app/script.js';
    script.dataset.siteId = '47935937-6c7d-4952-a363-b90c283f25d4';
    script.dataset.cap = "The password is 123test123";

    document.querySelector('head')?.appendChild(script);
  }
}
