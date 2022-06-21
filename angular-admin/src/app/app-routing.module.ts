import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './public/login/login.component';
import {RegisterComponent} from './public/register/register.component';
import {SecureComponent} from './secure/secure.component';
import {PublicComponent} from './public/public.component';
import {ProfileComponent} from './secure/profile/profile.component';
import {UsersComponent} from './secure/users/users.component';
import {UserCreateComponent} from './secure/users/user-create/user-create.component';
import {UserEditComponent} from './secure/users/user-edit/user-edit.component';
import {RolesComponent} from './secure/roles/roles.component';
import {RoleCreateComponent} from './secure/roles/role-create/role-create.component';
import {RoleEditComponent} from './secure/roles/role-edit/role-edit.component';
import {HomeComponent } from './public/Home/Home.component';
import {ApplicationComponent } from './public/application/application.component';
import {ApplicantComponent } from './secure/applicant/applicant.component';
import { ApplicantEditComponent } from './secure/applicant-edit/applicant-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent},
      {path: 'users', component: UsersComponent},
      {path: 'users/create', component: UserCreateComponent},
      {path: 'users/:id/edit', component: UserEditComponent},
      
      {path: 'roles', component: RolesComponent},
      {path: 'roles/create', component: RoleCreateComponent},
      {path: 'roles/:id/edit', component: RoleEditComponent},
      
        ]
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'home', component: HomeComponent},
      {path: 'apply', component: ApplicationComponent},
      {path: 'applicant', component: ApplicantComponent},
      {path: 'applicant/:id/edit', component: ApplicantEditComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
