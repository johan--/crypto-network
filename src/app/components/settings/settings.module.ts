import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CloudtasksModule } from '@cloudtasks/ngx-image';

import { MultilingualModule } from 'shared/i18n/multilingual.module';
import { HeaderModule } from 'shared/app/modules/header';
import { FooterModule } from 'shared/app/modules/footer';
import { FileUploaderModule } from 'shared/app/modules/file-uploader';

import { routing } from './settings.routing';
import { SettingsComponent } from './settings.component';

import { SettingsProfileComponent } from './profile/profile.component';
import { SettingsAccountComponent } from './account/account.component';
import { SettingsEmailsComponent } from './emails/emails.component';
import { SettingsNotificationsComponent } from './notifications/notifications.component';
import { SettingsOrganizationsComponent } from './organizations/organizations.component';

import { SettingsApplicationsComponent } from './applications/applications.component';
import { SettingsApplicationsNewComponent } from './applications/new/new.component';
import {
  SettingsApplicationsApplicationComponent
} from './applications/application/application.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    TooltipModule,
    ModalModule,
    CloudtasksModule,
    MultilingualModule,
    HeaderModule,
    FooterModule,
    FileUploaderModule
  ],
  declarations: [
    SettingsComponent,
    SettingsProfileComponent,
    SettingsAccountComponent,
    SettingsEmailsComponent,
    SettingsNotificationsComponent,
    SettingsOrganizationsComponent,

    SettingsApplicationsComponent,
    SettingsApplicationsNewComponent,
    SettingsApplicationsApplicationComponent
  ]
})
export class SettingsModule { }
