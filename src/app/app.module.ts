import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './feature/not-found/not-found.component';
import { CardModule } from './shared/card/card.module';
import { MatTabsModule } from '@angular/material/tabs';
import { SKILL_SERVICE_CONFIG_TOKEN, SKILL_SERVICE_CONFIG } from './services/skills.config';
import { SkillService } from './services/skill.service';
import { HomeModule } from './feature/home/home.module';
import { SkillsModule } from './feature/skills/skills.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule
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
