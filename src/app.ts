import "@/scss/main.scss";
import "@elements/layout/app-footer/app-footer";
import "@elements/layout/app-header/app-header";
import { Router } from "@lit-labs/router";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ROUTES } from "./routes/routes";

@customElement("my-app")
export class MyApp extends LitElement {
  private _routes = new Router(this, ROUTES);

  render() {
    return html`
      <app-header></app-header>
      ${this._routes.outlet()}
      <app-footer></app-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app": MyApp;
  }
}
