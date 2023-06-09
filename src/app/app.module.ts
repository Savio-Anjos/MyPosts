import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ListPostsUserComponent } from './components/list-posts-user/list-posts-user.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import { AlertConfig } from 'ng-zorro-antd/core/config';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GraphQLModule } from './graphql.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CapitalizeFirstLetterPipe,
    ListPostsUserComponent,
    CreatePostComponent,
    UpdatePostComponent,
    DeletePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzButtonModule,
    GraphQLModule,
    NzModalModule,
    NzIconModule,
    NzInputModule,
    NzAlertModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
