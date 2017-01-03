import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroListComponent}    from './hero-list/hero-list.component';
import {HeroDetailComponent}  from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroListComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroRoutingModule {
}