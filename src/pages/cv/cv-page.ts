import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cv-page")
class CVPage extends LitElement {
  render() {
    return html``;
  }
}

export default CVPage;

declare global {
  interface HTMLElementTagNameMap {
    "cv-page": CVPage;
  }
}
