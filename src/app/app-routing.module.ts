import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

//imports: [ RouterModule.forRoot(routes) ],

const routes: Routes = [
  // 添加默认路由
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dash', component: DashboardComponent }
];

@NgModule({
  //首先初始化路由器，并让它开始监听浏览器中的地址变化
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
