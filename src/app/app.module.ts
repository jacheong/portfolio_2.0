import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, PLATFORM_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './feature/not-found/not-found.component';
import { CardModule } from './shared/card/card.module';
import { MatTabsModule } from '@angular/material/tabs';
import { SKILL_SERVICE_CONFIG_TOKEN, SKILL_SERVICE_CONFIG } from './services/skills.config';
import { SkillService } from './services/skill.service';
import { HomeModule } from './feature/home/home.module';
import { PlatformModule } from '@angular/cdk/platform';
import { AppInitializerService } from './services/app-initializer.service';
import { IeComponent } from './ie/ie.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export function initializeApp1(appInitService: AppInitializerService) {
  return (): Promise<any> => { 
    return appInitService.init();
  }
}


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    IeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    PlatformModule,
    CardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    SkillService,
    AppInitializerService,
    { provide: SKILL_SERVICE_CONFIG_TOKEN, useValue: SKILL_SERVICE_CONFIG },
    { provide: APP_INITIALIZER,useFactory: initializeApp1, deps: [AppInitializerService], multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
