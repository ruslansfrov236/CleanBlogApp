import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardsComponent } from './admin/components/dashboards/dashboards.component';
import { NotFoundComponent } from './ui/components/not-found/not-found.component';

export const routes: Routes = [

    {path:"admin" , component:LayoutComponent , children:[
        {path:"" , component:DashboardsComponent},
        {path:"post", loadChildren :()=> import("./admin/components/posts/posts.module").then(module=>module.PostsModule)},
        {path:"message" , loadChildren :()=> import("./admin/components/message/message.module").then(module=>module.MessageModule)},
        {path:"header" , loadChildren :()=> import("./admin/components/header/header.module").then(module=>module.HeaderModule)},
        {path:"users" ,  loadChildren :()=> import("./admin/components/users/users.module").then(module=>module.UsersModule)},
        {path:"contacts", loadChildren :()=> import("./admin/components/contacts/contacts.module").then(module=>module.ContactsModule)},
        {path:"about", loadChildren :() => import("./admin/components/about/about.module").then(module=>module.AboutModule)}
    ]},
    {path:"" , loadChildren:()=> import("./ui/components/home/home.module").then(module=>module.HomeModule)},
    {path:"about", loadChildren:()=> import("./ui/components/about/about.module").then(module=>module.AboutModule)},
    {path:"post", loadChildren:()=> import("./ui/components/posts/posts.module").then(module=>module.PostsModule)},
    {path:"contact", loadChildren :()=> import("./ui/components/contact/contact.module").then(module=>module.ContactModule)},
    {path:"**" ,component:NotFoundComponent}
];
