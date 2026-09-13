import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./app-card-help.scss?inline";
import { utilityStyles } from "@/managers/utility-styles.manager";

@customElement("app-card-help")
class AppCardHelp extends LitElement {
  static styles = [
    unsafeCSS(styles),
    utilityStyles.use(["container", "title"]),
  ];

  render() {
    return html`
      <div class="container">
        <div class="card-help">
          <div class="card-help__title">¡Apoyemos!</div>

          <div class="card-help__text">
            <strong>¿Necesitas apoyo o consultas?</strong>
            <br />
            Puedes enviarme un mensaje para apoyarte.
          </div>

          <a
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=2462383804&text=Hola, me gustaría una consultaría"
            target="_blank"
            type="button"
            title="Enviar mensaje"
            class="card-help__button"
          >
            Enviar mensaje
            <!-- <ChatBubbleOvalLeftEllipsisIcon /> -->
          </a>
        </div>
      </div>
    `;
  }
}

export default AppCardHelp;

declare global {
  interface HTMLElementTagNameMap {
    "app-card-help": AppCardHelp;
  }
}
