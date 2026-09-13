import { socials } from "@/data/sociales.json";
import type { Social } from "@/types/index";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { utilityStyles } from "@/managers/utility-styles.manager";
import styles from "./app-footer.scss?inline";

@customElement("app-footer")
class AppFooter extends LitElement {
  static styles = [
    unsafeCSS(styles),
    utilityStyles.use(["container", "title"]),
  ];

  private _socials = socials;

  private year = new Date().getFullYear();

  private _linkTpl(social: Social) {
    return html` <a
      aria-label="${social.name}"
      title="${social.name}"
      target="_blank"
      key="${social._id}"
      href="${social.link}"
      class="footer__social"
    >
      <img src="${social.icon}" alt="${social.name}" />
    </a>`;
  }

  render() {
    return html`
      <footer class="footer ">
        <div class="footer__content container">
          <div class="header__title">Javier Gutierrez</div>
          <span class="footer__text">
            Sígueme en mis <strong>redes sociales</strong> para estar al tanto
            de mis futuras publicaciones.
          </span>

          <div class="footer__socials">
            ${this._socials.map((social) => this._linkTpl(social))}
          </div>

          <span class="footer__copyright">
            &copy; ${this.year} - Hecho por
            <strong>Javier Gutierrez</strong>
          </span>
        </div>
      </footer>
    `;
  }
}

export default AppFooter;

declare global {
  interface HTMLElementTagNameMap {
    "app-footer": AppFooter;
  }
}
