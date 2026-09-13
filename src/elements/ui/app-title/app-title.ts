import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-title")
export class AppTitle extends LitElement {
  @property({
    attribute: "title",
  })
  title: string = "Experiencia y educación";

  @property({
    attribute: "subtitle",
  })
  subtitle?: string =
    "Un recorrido por mi formación, experiencia y crecimiento como desarrollador Front-End.";

  @property()
  eyebrow?: string = "";

  @property()
  alignment?: string = "center";

  @property()
  textAlign?: string = "left";

  static styles = [
    css`
      .heading {
        max-width: 68rem;
        margin-top: 0;
        margin-bottom: 6.4rem;
        text-align: center;
      }

      .heading__center {
        border: red;
        margin-inline: auto;
      }

      .heading__right {
        margin-left: auto;
      }

      .heading__eyebrow {
        margin: 0 0 1.2rem;
        color: #737373;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      h2 {
        margin: 0;
        font-size: clamp(3.2rem, 5vw, 5.2rem);
        font-weight: 600;
        letter-spacing: -0.045em;
      }

      .heading__description {
        margin: 1.6rem 0 0;
        color: #737373;
        font-size: 1.6rem;
        line-height: 1.6;
      }

      @media (max-width: 700px) {
        .heading {
          margin-bottom: 4rem;
          text-align: left;
        }
      }
    `,
  ];

  render() {
    return html` <header class="heading heading__${this.alignment}">
      <p class="heading__eyebrow">${this.eyebrow}</p>
      <h2 id="timeline-title">${this.title}</h2>
      <p class="heading__description">${this.subtitle}</p>
    </header>`;
  }
}

export default AppTitle;

declare global {
  interface HTMLElementTagNameMap {
    "app-title": AppTitle;
  }
}
