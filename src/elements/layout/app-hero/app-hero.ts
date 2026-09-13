import { utilityStyles } from "@/managers/utility-styles.manager";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./app-hero.scss?inline";
import avatar from "/image/avatar/man-playing-video-game.svg";

@customElement("app-hero")
class AppHero extends LitElement {
  static styles = [
    unsafeCSS(styles),
    utilityStyles.use(["container", "title"]),
  ];

  render() {
    return html`
      <section class="hero">
        <div class=" hero__content container">
          <div class="hero__information">
            <span class="hero__title">
              Front-end <strong class="suffix">developer</strong>
            </span>

            <hr />

            <p class="hero__description">
              Desarrollo <strong>sitios web</strong> profesionales, adaptables a
              cualquier dispositivo. 🚀
            </p>

            <a
              href="{CV}"
              target="_blank"
              title="Descargar CV"
              type="button"
              class="hero__button"
            >
              Descargar CV
              <!-- <ArrowDownOnSquareIcon class="hero__button-icon" /> -->
            </a>
          </div>

          <picture class="hero__image">
            <img src="${avatar}" alt="Avatar" />
          </picture>
        </div>
      </section>
    `;
  }
}

export default AppHero;

declare global {
  interface HTMLElementTagNameMap {
    "app-hero": AppHero;
  }
}
