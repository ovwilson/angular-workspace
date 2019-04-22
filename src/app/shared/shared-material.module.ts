import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatRadioModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatTabsModule,
  MatSelectModule,
  MatExpansionModule,
  MatStepperModule,
  MatDialogModule,
  MatTableModule,
  MatCheckboxModule,
  MatDividerModule,
  MatMenuModule
} from '@angular/material';

const COMPONENT_MODULES = [
  ReactiveFormsModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatRadioModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatTabsModule,
  MatSelectModule,
  MatExpansionModule,
  MatStepperModule,
  MatDialogModule,
  MatTableModule,
  MatCheckboxModule,
  MatDividerModule,
  MatMenuModule
];

@NgModule({
  imports: [COMPONENT_MODULES],
  exports: [COMPONENT_MODULES]
})
export class SharedMaterialModule {}
