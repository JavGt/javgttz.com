// src/components/cv/cv-3d-shell.ts
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cv-3d-shell")
export class Cv3dShell extends LitElement {
  @property({ type: Number, attribute: "max-rotation" })
  maxRotation = 2.5;

  private frame?: number;
  private pending = { rotateX: 0, rotateY: 0, x: 50, y: 50 };

  static styles = css`
    :host {
      --rotate-x: 0deg;
      --rotate-y: 0deg;
      --pointer-x: 50%;
      --pointer-y: 50%;

      display: block;
      perspective: 1600px;
    }

    .sheet {
      position: relative;
      overflow: hidden;
      border: 1px solid rgb(255 255 255 / 14%);
      border-radius: 1.5rem;
      background: #f7f8fb;
      box-shadow: 0 2rem 5rem rgb(0 0 0 / 28%);
      transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
      transform-style: preserve-3d;
      transition:
        transform 250ms ease-out,
        box-shadow 250ms ease-out;
      will-change: transform;
    }

    :host([data-tilting]) .sheet {
      box-shadow: 0 3.5rem 6rem rgb(0 0 0 / 38%);
      transition: transform 80ms linear;
    }

    .glare {
      position: absolute;
      z-index: 2;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(
        circle at var(--pointer-x) var(--pointer-y),
        rgb(255 255 255 / 42%),
        transparent 38%
      );
      mix-blend-mode: soft-light;
    }

    .content {
      position: relative;
      z-index: 1;
      transform: translateZ(25px);
      transform-style: preserve-3d;
    }

    ::slotted(*) {
      display: block;
    }

    @media (prefers-reduced-motion: reduce) {
      .sheet {
        transform: none;
        transition: none;
      }

      .glare {
        display: none;
      }
    }
  `;

  private handlePointerMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;

    const sheet = event.currentTarget as HTMLElement;
    const bounds = sheet.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    this.pending = {
      rotateX: -y * this.maxRotation,
      rotateY: x * this.maxRotation,
      x: (x + 0.5) * 100,
      y: (y + 0.5) * 100,
    };

    this.toggleAttribute("data-tilting", true);

    if (this.frame) return;

    this.frame = requestAnimationFrame(() => {
      this.style.setProperty("--rotate-x", `${this.pending.rotateX}deg`);
      this.style.setProperty("--rotate-y", `${this.pending.rotateY}deg`);
      this.style.setProperty("--pointer-x", `${this.pending.x}%`);
      this.style.setProperty("--pointer-y", `${this.pending.y}%`);
      this.frame = undefined;
    });
  };

  private resetTilt = () => {
    this.toggleAttribute("data-tilting", false);
    this.style.setProperty("--rotate-x", "0deg");
    this.style.setProperty("--rotate-y", "0deg");
    this.style.setProperty("--pointer-x", "50%");
    this.style.setProperty("--pointer-y", "50%");
  };

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }
  }

  render() {
    return html`
      <article
        class="sheet"
        @pointermove=${this.handlePointerMove}
        @pointerleave=${this.resetTilt}
      >
        <div class="glare"></div>

        <div class="content">
          <slot></slot>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-3d-shell": Cv3dShell;
  }
}
