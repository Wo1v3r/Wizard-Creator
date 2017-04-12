//Modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'

//Relevant to Flex
import { FlexLayoutModule } from '@angular/flex-layout';


//Relevant to material:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

//Components:
import { AppComponent } from './app.component';
import { ManaHeaderComponent } from './layout/mana-header/mana-header.component';
import { ManaNavComponent } from './layout/mana-nav/mana-nav.component';
import { ManaFooterComponent } from './layout/mana-footer/mana-footer.component';
import { ManaAboutComponent } from './views/mana-about/mana-about.component';
import { ManaBlogComponent } from './views/mana-blog/mana-blog.component';
import { ManaGalleryComponent } from './views/mana-gallery/mana-gallery.component';
import { ManaCreateComponent } from './views/mana-create/mana-create.component';
import { ManaLoginComponent } from './views/mana-login/mana-login.component';
import { ManaRegisterComponent } from './views/mana-register/mana-register.component';

//Services

import { SkillsService } from './services/skills.service';
import { ManaShopComponent } from './views/mana-create/mana-shop/mana-shop.component';


@NgModule({
  declarations: [
    AppComponent,
    ManaHeaderComponent,
    ManaNavComponent,
    ManaFooterComponent,
    ManaAboutComponent,
    ManaBlogComponent,
    ManaGalleryComponent,
    ManaCreateComponent,
    ManaLoginComponent,
    ManaRegisterComponent,
    ManaShopComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [ SkillsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
