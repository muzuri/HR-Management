import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {MenuComponent} from './menu/menu.component';
import {SecureComponent} from './secure.component';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { UploadComponent } from './components/upload/upload.component';
import { HomeComponent } from '../public/Home/Home.component';
import { ApplicationComponent } from '../public/application/application.component';
import { ControlMessages } from './components/controlMessages/controlMessages.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantEditComponent } from './applicant-edit/applicant-edit.component';




@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    SecureComponent,
    ProfileComponent,
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    RolesComponent,
    RoleCreateComponent,
    RoleEditComponent,
    PaginatorComponent,
    UploadComponent,
    HomeComponent,
    ApplicationComponent,
    ControlMessages,
    ApplicantComponent,
    ApplicantEditComponent
  ],
  exports: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecureModule {
}
