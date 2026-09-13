// src/components/extension-showcase/extension-showcase.ts
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "iconify-icon";

@customElement("extension-showcase")
export class ExtensionShowcase extends LitElement {
  static styles = css`
    :host {
      display: block;
      color: #111;
      font-family: inherit;
      font-size: 1.6rem;
    }

    .extension {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(28rem, 0.8fr);
      gap: 6.4rem;
      padding: 4rem 0;
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
    }

    .eyebrow {
      margin: 0 0 1.2rem;
      color: #737373;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    h2 {
      max-width: 68rem;
      margin: 0;
      font-size: clamp(3.2rem, 5vw, 5.2rem);
      font-weight: 600;
      letter-spacing: -0.05em;
      line-height: 1;
    }

    .description {
      max-width: 56rem;
      margin: 2rem 0 0;
      color: #737373;
      font-size: 1.8rem;
      line-height: 1.6;
    }

    .link {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      margin-top: 3.2rem;
      padding-bottom: 0.6rem;
      border-bottom: 1px solid #111;
      color: #111;
      font-size: 1.5rem;
      font-weight: 600;
      text-decoration: none;
    }

    .link:hover {
      color: #737373;
      border-color: #737373;
    }

    .features {
      display: grid;
      gap: 0;
      margin: 0;
      padding: 0;
      border-top: 1px solid #e5e5e5;
      list-style: none;
    }

    .feature {
      display: grid;
      grid-template-columns: 4.4rem 1fr;
      gap: 1.6rem;
      align-items: center;
      padding: 1.8rem 0;
      border-bottom: 1px solid #e5e5e5;
    }

    .feature__icon {
      display: grid;
      width: 4.4rem;
      height: 4.4rem;
      place-items: center;
      border: 1px solid #111;
    }

    iconify-icon {
      font-size: 2rem;
    }

    .feature__title {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 600;
    }

    .feature__description {
      margin: 0.4rem 0 0;
      color: #737373;
      font-size: 1.4rem;
      line-height: 1.5;
    }

    @media (max-width: 700px) {
      .extension {
        grid-template-columns: 1fr;
        gap: 4rem;
        padding: 3.2rem 0;
      }

      .description {
        font-size: 1.6rem;
      }
    }
  `;

  render() {
    return html`
      <section class="extension" aria-labelledby="extension-title">
        <div>
          <p class="eyebrow">Proyecto personal · VS Code Extension</p>

          <h2 id="extension-title">React Create Component</h2>

          <p class="description">
            Extensión para Visual Studio Code que acelera la creación de
            componentes React mediante plantillas configurables, estructura
            consistente y archivos listos para trabajar.
          </p>

          <a
            class="link"
            href="https://marketplace.visualstudio.com/items?itemName=JavierGutierrez.create-component-React"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Visual Studio Marketplace
            <iconify-icon
              icon="lucide:arrow-up-right"
              aria-hidden="true"
            ></iconify-icon>
          </a>
        </div>

        <ul class="features" aria-label="Características de la extensión">
          <li class="feature">
            <span class="feature__icon">
              <iconify-icon
                icon="lucide:component"
                aria-hidden="true"
              ></iconify-icon>
            </span>
            <div>
              <p class="feature__title">Componentes configurables</p>
              <p class="feature__description">
                Generación de componentes según el lenguaje y plantilla
                elegidos.
              </p>
            </div>
          </li>

          <li class="feature">
            <span class="feature__icon">
              <iconify-icon
                icon="lucide:palette"
                aria-hidden="true"
              ></iconify-icon>
            </span>
            <div>
              <p class="feature__title">Estilos integrados</p>
              <p class="feature__description">
                Soporte para CSS, Sass, SCSS, CSS Modules y styled-components.
              </p>
            </div>
          </li>

          <li class="feature">
            <span class="feature__icon">
              <iconify-icon
                icon="lucide:braces"
                aria-hidden="true"
              ></iconify-icon>
            </span>
            <div>
              <p class="feature__title">Estructura escalable</p>
              <p class="feature__description">
                Genera barrel files, interfaces TypeScript y archivos de estilo.
              </p>
            </div>
          </li>

          <li class="feature">
            <span class="feature__icon">
              <iconify-icon
                icon="lucide:test-tube-2"
                aria-hidden="true"
              ></iconify-icon>
            </span>
            <div>
              <p class="feature__title">Flujo de desarrollo</p>
              <p class="feature__description">
                Integración opcional con Storybook, Jest y Testing Library.
              </p>
            </div>
          </li>
        </ul>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "extension-showcase": ExtensionShowcase;
  }
}
