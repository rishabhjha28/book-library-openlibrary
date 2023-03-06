import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './myComponent/sidebar/sidebar.component';
import { TopbarComponent } from './myComponent/topbar/topbar.component';
import { MainContentComponent } from './myComponent/main-content/main-content.component';
import { SubjectComponent } from './myComponent/sidebar/subject/subject.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotFoundComponent } from './myComponent/not-found/not-found.component';
import { ButtonComponent } from './myComponent/button/button.component';
import { PaginationComponent } from './myComponent/pagination/pagination.component';
import { TableComponent } from './myComponent/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    MainContentComponent,
    SubjectComponent,
    NotFoundComponent,
    ButtonComponent,
    PaginationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
