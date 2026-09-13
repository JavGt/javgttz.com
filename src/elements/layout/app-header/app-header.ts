import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./app-header.scss?inline";
import { utilityStyles } from "../../../managers/utility-styles.manager";

@customElement("app-header")
class AppHeader extends LitElement {
  static styles = [unsafeCSS(styles), utilityStyles.use(["container"])];

  render() {
    return html`
      <header class="header">
        <div class="header__container container">
          <a href="/" class="header__logo">
            <div class="header__title">Javier Gutierrez</div>
          </a>

          <span class="header__alert">Pagina en construcción </span>
        </div>
      </header>
    `;
  }
}

export default AppHeader;

declare global {
  interface HTMLElementTagNameMap {
    "app-header": AppHeader;
  }
}
