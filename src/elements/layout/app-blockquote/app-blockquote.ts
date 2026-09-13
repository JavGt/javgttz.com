import { utilityStyles } from "@/managers/utility-styles.manager";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./app-blockquote.scss?inline";

@customElement("app-blockquote")
class AppBlockquote extends LitElement {
  static styles = [
    unsafeCSS(styles),
    utilityStyles.use(["container", "title"]),
  ];

  render() {
    return html`
      <div class="container">
        <div class="blockquote">
          <blockquote>
            "El fracaso es una opción. Si las cosas no están fallando, no estás
            innovando lo suficiente"
            <hr />
            <cite>-Elon Musk</cite>
          </blockquote>
        </div>
      </div>
    `;
  }
}

export default AppBlockquote;

declare global {
  interface HTMLElementTagNameMap {
    "app-blockquote": AppBlockquote;
  }
}
