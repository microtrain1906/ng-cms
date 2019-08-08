import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { UsersService } from './users.service';
import { ArticlesService } from './articles.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleViewComponent }   from './article-view/article-view.component';
import { ArticleCreateComponent }   from './article-create/article-create.component';
import { ArticleEditComponent }   from './article-edit/article-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserViewComponent,
    UserCreateComponent,
    UserEditComponent,
    ArticlesComponent,
    ArticleViewComponent,
    ArticleCreateComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
