import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "iconify-icon";
import work from "@/data/work.json";
import { repeat } from "lit/directives/repeat.js";

@customElement("work-timeline")
export class WorkTimeline extends LitElement {
  @property({ attribute: false })
  items = work;

  static styles = css`
    :host {
      display: block;
      color: #111;
      font-family: inherit;
      font-size: 1.6rem;
    }

    .timeline {
      position: relative;
      display: grid;
      gap: 3.2rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .timeline::before {
      position: absolute;
      top: 1.6rem;
      bottom: 1.6rem;
      left: 50%;
      border-left: 1px dashed #d4d4d4;
      content: "";
    }

    .item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 7.2rem minmax(0, 1fr);
      align-items: center;
    }

    .item__content {
      padding: 2.4rem;
      border: 1px solid #e5e5e5;
      background: #ffffff71;
      border-radius: 0.9rem;
    }

    .item:nth-child(odd) .item__content {
      grid-column: 1;
      text-align: right;
    }

    .item:nth-child(even) .item__content {
      grid-column: 3;
    }

    .item__node {
      z-index: 1;
      grid-column: 2;
      grid-row: 1;
      display: grid;
      width: 4.4rem;
      height: 4.4rem;
      place-items: center;
      justify-self: center;
      border: 1px solid #111;
      border-radius: 50%;
      background: #fff;
      color: #111;
    }

    iconify-icon {
      font-size: 1.9rem;
    }

    .item__period {
      margin: 0 0 1rem;
      color: #737373;
      font-size: 1.4rem;
    }

    .item__role {
      margin: 0;
      font-size: 1.9rem;
      font-weight: 600;
      letter-spacing: -0.025em;
    }

    .item__company {
      margin: 0.6rem 0 1.4rem;
      color: #111;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .item__description {
      margin: 0;
      color: #737373;
      font-size: 1.6rem;
      line-height: 1.6;
    }

    @media (max-width: 700px) {
      .timeline::before {
        left: 2.2rem;
      }

      .item {
        grid-template-columns: 4.4rem minmax(0, 1fr);
        gap: 1.6rem;
      }

      .item__node {
        grid-column: 1;
      }

      .item:nth-child(odd) .item__content,
      .item:nth-child(even) .item__content {
        grid-column: 2;
        text-align: left;
      }
    }
  `;

  _timelineTpl(item: (typeof this.items)[0]) {
    return html` <li class="item">
      <article class="item__content">
        <p class="item__period">${item.period}</p>
        <h3 class="item__role">${item.role}</h3>
        <p class="item__company">${item.company}</p>
        <p class="item__description">${item.description}</p>
      </article>

      <span class="item__node" aria-hidden="true">
        <iconify-icon icon=${item.icon}></iconify-icon>
      </span>
    </li>`;
  }

  render() {
    return html`
      <section aria-labelledby="timeline-title">
        <app-title
          eyebrow="Trayectoria profesional"
          title="Experiencia y educación"
          subtitle="Un recorrido por mi formación, experiencia y crecimiento como desarrollador Front-End"
        ></app-title>

        <ol class="timeline">
          ${repeat(this.items, (item) => this._timelineTpl(item))}
        </ol>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "work-timeline": WorkTimeline;
  }
}
