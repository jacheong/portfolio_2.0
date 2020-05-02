import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';

@Injectable()
export class AppInitializerService {

  constructor(
    private router: Router,
    private platform: Platform
  ) { }

  init() {
    return new Promise<void>((resolve, reject) => {
      if (this.platform.EDGE || this.platform.TRIDENT) {
        this.router.navigateByUrl("/ie").then((succ) => {
          resolve();
        }).catch(err => {
          console.error("Application failed to load");
          reject();
        });
      } else {
        resolve();
      }
  });
  }
}
