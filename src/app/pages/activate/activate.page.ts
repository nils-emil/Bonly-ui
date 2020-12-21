import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';

import { ActivateService } from './activate.service';

@Component({
  templateUrl: './activate.page.html',
})
export class ActivatePage implements OnInit {
  error = false;
  success = false;

  constructor(private activateService: ActivateService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(flatMap(params => this.activateService.get(params.key))).subscribe(
        () => (this.success = true),
        () => (this.error = true)
    );
  }

  login(): void {
    this.router.navigate(['/']);
  }
}
