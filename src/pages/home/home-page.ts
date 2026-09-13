import "@/elements/layout/app-blockquote";
import "@/elements/layout/app-card-help";
import "@/elements/layout/app-hero";
import "@/elements/sections/skills-grid";
import "@/elements/sections/extension-showcase";
import "@/elements/sections/work-timeline";
import "@/elements/ui/app-cv";
import "@/elements/ui/cv-3d-shell";
import { utilityStyles } from "@/managers/utility-styles.manager";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("home-page")
class HomePage extends LitElement {
  static styles = [utilityStyles.use(["container", "title"])];
  render() {
    return html`
      <main>
        <app-hero></app-hero>
        <app-blockquote></app-blockquote>
        <!-- <app-cv></app-cv> -->
        <section class="container">
          <work-timeline></work-timeline>
        </section>

        <section class="container section">
          <skills-grid></skills-grid>
        </section>

        <section class="container section">
          <extension-showcase></extension-showcase>
        </section>

        <app-card-help></app-card-help>
      </main>
    `;
  }
}

export default HomePage;

declare global {
  interface HTMLElementTagNameMap {
    "home-page": HomePage;
  }
}
