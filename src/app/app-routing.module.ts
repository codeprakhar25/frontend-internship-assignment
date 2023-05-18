import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { TrendingSubjectsComponent } from '../app/components/trending-subjects/trending-subjects.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Open Books Library',
  },
  {
    path: 'trending-subject/:name',
    component: TrendingSubjectsComponent,
    title: 'Trending Subjects',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
