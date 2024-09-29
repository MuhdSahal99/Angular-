import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "my-component, MyComponent",
  template: `
    <div class="tab-bar">
      <div class="tab">Overview</div>
      <div class="tab-2">Applicants</div>
      <div class="tab">Settings</div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
      .tab-bar {
        background-color: rgba(255, 255, 255, 1);
        border-color: rgba(237, 237, 238, 1);
        border-top-width: 1px;
        display: flex;
        width: 100%;
        align-items: start;
        gap: 24px;
        color: rgba(113, 113, 121, 1);
        white-space: nowrap;
        justify-content: start;
        flex-wrap: wrap;
        padding: 8px 24px 0;
        font: 500 14px/1 Poppins, sans-serif;
      }
      @media (max-width: 991px) {
        .tab-bar {
          max-width: 100%;
          white-space: initial;
          padding: 0 20px;
        }
      }
      .tab {
        align-self: stretch;
        gap: 6px;
        padding: 8px 0;
      }
      @media (max-width: 991px) {
        .tab {
          white-space: initial;
        }
      }
      .tab-2 {
        align-self: stretch;
        border-color: rgba(0, 136, 208, 1);
        border-bottom-width: 2px;
        gap: 6px;
        color: rgba(9, 9, 11, 1);
        padding: 8px 0;
      }
      @media (max-width: 991px) {
        .tab-2 {
          white-space: initial;
        }
      }
    `,
  ],
})
export default class MyComponent {}

@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
  exports: [MyComponent],
})
export class MyComponentModule {}