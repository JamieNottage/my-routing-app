import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {
    console.log('UserComponent Loaded...');
    this.route.params.subscribe((params) => {
      this.user = params as { id: number; name: string };
    });
  }

  ngOnInit() {}
}
