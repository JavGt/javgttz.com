// src/components/skills-grid/skills-grid.ts
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import skillsData from "@/data/skills.json";

export type Skill = {
  _id: string;
  name: string;
  image: string;
};

@customElement("skills-grid")
export class SkillsGrid extends LitElement {
  @property({ attribute: false })
  skills: Skill[] = skillsData.skills;

  static styles = css`
    :host {
      display: block;
      color: #111;
      font-family: inherit;
      font-size: 1.6rem;
    }

    .header {
      max-width: 68rem;
      margin-bottom: 4rem;
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
      margin: 0;
      font-size: clamp(3.2rem, 5vw, 5.2rem);
      font-weight: 600;
      letter-spacing: -0.045em;
    }

    .description {
      margin: 1.6rem 0 0;
      color: #737373;
      font-size: 1.6rem;
      line-height: 1.6;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
      gap: 1.2rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .item {
      border-radius: 0.9rem;
      display: flex;
      min-height: 12rem;
      gap: 1.2rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #e5e5e5;
      transition:
        border-color 160ms ease,
        transform 160ms ease;
    }

    .item:hover {
      border-color: #111;
      transform: translateY(-0.2rem);
    }

    .icon {
      width: 4rem;
      height: 4rem;
      object-fit: contain;
    }

    .name {
      color: #404040;
      font-size: 1.4rem;
      text-align: center;
    }
  `;

  render() {
    return html`
      <section aria-labelledby="skills-title">
        <app-title
          eyebrow="Stack técnico"
          title="Conocimientos y herramientas"
          subtitle="Tecnologías que uso para construir interfaces, arquitecturas y productos web."
        ></app-title>

        <ul class="grid">
          ${repeat(
            this.skills,
            (skill) => skill.name,
            (skill) => html`
              <li class="item">
                <img
                  class="icon"
                  src=${skill.image}
                  alt=""
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <span class="name">${skill.name}</span>
              </li>
            `,
          )}
        </ul>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "skills-grid": SkillsGrid;
  }
}
