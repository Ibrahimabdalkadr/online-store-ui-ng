import { Component } from '@angular/core';

@Component({
    selector: 'app-error',
    standalone: true,
    imports: [],
    template: `
    <div class="error-page-container">
        <h1>404 not found</h1>
    </div>`,
    styles: `
    .error-page-container {
    display: grid;
    place-items: center;
    background-color: aqua;
    height: 100vh;
    color: #fff;
    font-size: xx-large;
    }
   `
})
export class ErrorComponent {

}
