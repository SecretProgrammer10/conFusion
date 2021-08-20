import { Routes } from '@angular/router'
import { AboutComponent } from 'src/app/about/about.component'
import { ContactComponent } from 'src/app/contact/contact.component'
import { HomeComponent } from 'src/app/home/home.component'
import { MenuComponent } from 'src/app/menu/menu.component'

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
]