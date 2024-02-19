import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/logo2.png" 
          class="align-middle m-2"
          alt="logo"
          style="width: 200px; height: 50px;"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
