import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { SpeakersComponent } from './speakers.component';
import { AddEditSpeakerComponent } from './Components/add-edit-speaker/add-edit-speaker.component';
import { SpeakerDetailsComponent } from './Components/speaker-details/speaker-details.component';

@NgModule({
  declarations: [
    SpeakersComponent,
    AddEditSpeakerComponent,
    SpeakerDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSnackBarModule,
  ],
})
export class SpeakerModule {}
