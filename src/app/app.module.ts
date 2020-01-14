import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { ContainerComponent } from './components/layout/container/container.component';
import { BriefComponent } from './components/content/brief/brief.component';
import { ExperienceComponent } from './components/content/experience/experience.component';
import { BulletComponent } from './components/utils/bullet/bullet.component';
import { TimelineItemComponent } from './components/utils/timeline-item/timeline-item.component';
import { TaskComponent } from './components/utils/task/task.component';
import { EducationComponent } from './components/content/education/education.component';
import { SkillsComponent } from './components/content/skills/skills.component';
import { ItemRankingComponent } from './components/utils/item-ranking/item-ranking.component';
import { AboutMeComponent } from './components/content/about-me/about-me.component';
import { MomentPipe } from './pipes/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerComponent,
    BriefComponent,
    ExperienceComponent,
    BulletComponent,
    TimelineItemComponent,
    TaskComponent,
    EducationComponent,
    SkillsComponent,
    ItemRankingComponent,
    AboutMeComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
