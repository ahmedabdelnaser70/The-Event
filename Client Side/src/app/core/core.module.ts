import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './Contact/contact.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContactComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, ContactComponent],
})
export class CoreModule {}
