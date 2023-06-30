import { NgModule ,NO_ERRORS_SCHEMA } from '@angular/core';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { OutlineComponent } from './outline/outline.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CdkColumnDef } from '@angular/cdk/table';
import { EventModule } from './Events/event.module';
import { AccountModule } from './account/account.module';
import { SpeakerModule } from './Speakers/speaker.module';
import { SponserModule } from './Sponsers/sponser.module';
import { NotFoundComponent } from './NotFound/not-found.component';
import { TicketComponent } from './ticket/ticket.component';
import { UsersModule } from './Users/users/users.module';


@NgModule({
  declarations: [AppComponent, OutlineComponent, NotFoundComponent, TicketComponent],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    UsersModule
  ],
  exports: [MatTableModule, MatSortModule, MatPaginatorModule],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule {}
