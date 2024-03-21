import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListComponent } from './components/pages/list/list.component';
import { HotelComponent } from './components/pages/hotel/hotel.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturedComponent } from './components/partials/featured/featured.component';
import { PropertyListComponent } from './components/partials/property-list/property-list.component';
import { FeaturedPropertiesComponent } from './components/partials/featured-properties/featured-properties.component';
import { MailListComponent } from './components/partials/mail-list/mail-list.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { SearchItemComponent } from './components/partials/search-item/search-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    HotelComponent,
    NavbarComponent,
    HeaderComponent,
    FeaturedComponent,
    PropertyListComponent,
    FeaturedPropertiesComponent,
    MailListComponent,
    FooterComponent,
    SearchItemComponent,
  ],
  imports: [
    FormsModule,
    MbscModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
