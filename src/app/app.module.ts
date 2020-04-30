import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './feature/home/home.component';
import { NotFoundComponent } from './feature/not-found/not-found.component';
import { CardModule } from './shared/card/card.module';
import { MatTabsModule } from '@angular/material/tabs';
import { SkillsComponent } from './feature/skills/skills.component';
import { AboutComponent } from './feature/about/about.component';
import { SKILL_SERVICE_CONFIG_TOKEN, SKILL_SERVICE_CONFIG } from './services/skills.config';
import { SkillService } from './services/skill.service';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SkillsComponent,
    AboutComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    MatTabsModule
  ],
  providers: [
    SkillService,
    { provide: SKILL_SERVICE_CONFIG_TOKEN, useValue: SKILL_SERVICE_CONFIG }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
