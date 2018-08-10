import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent5Component } from './parent5/parent5.component';
import { Child5Component } from './child5/child5.component';
import { Subchild5Component } from './subchild5/subchild5.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Parent5Component, Child5Component, Subchild5Component],
  exports: [Parent5Component, Child5Component, Subchild5Component]
})
export class Task5Module { }
