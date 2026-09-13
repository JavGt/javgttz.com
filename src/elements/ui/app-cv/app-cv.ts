import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./app-cv.scss?inline";

@customElement("app-cv")
class AppCV extends LitElement {
  static styles = [unsafeCSS(styles)];

  get _profileTpl() {
    return html` <section>
      <h2>Perfil</h2>
      <p>
        Desarrollador Front-end especializado en la optimización de proyectos,
        implementación de tecnologías modernas y desarrollo de soluciones
        escalables. Experto en la creación de librerías, gestión de
        arquitecturas de código y diseño de interfaces interactivas.
      </p>
    </section>`;
  }

  get _educationTpl() {
    return html` <section class="education">
      <h2>Educación</h2>
      <h3>Universidad Politécnica de Tlaxcala</h3>
      <p>Ingeniería en Tecnologías de la Información</p>
      <p class="dates">2018 - 2022</p>
    </section>`;
  }

  get _achievementsTpl() {
    return html`<section>
      <h2>Logros</h2>
      <ul class="achievement-list">
        <li>
          Certificaciones CCNA de Cisco Networking Academy
          <ul>
            <li>Introducción a Redes</li>
            <li>Redes empresariales, Seguridad y Automatización</li>
            <li>Switching, Routing and Wireless Essentials</li>
          </ul>
        </li>
        <li>Cédula profesional en mantenimiento en equipos de cómputo</li>
        <li>Licenciatura en Ingeniería en Tecnologías de la Información</li>
        <li>
          Certificados de finalización en plataformas de estudio sobre
          tecnologías web
        </li>
        <li>
          Creación de extensión en VS Code: React Create Component, +4,000
          descargas
        </li>
      </ul>
    </section>`;
  }

  get _skillsTpl() {
    return html` <section>
      <h2>Herramientas y lenguajes</h2>
      <ul class="skill-list">
        <li>HTML5 / Pug</li>
        <li>CSS3 / Sass</li>
        <li>JavaScript / TypeScript</li>
        <li>PHP</li>
        <li>MySQL / MongoDB</li>
        <li>API REST / GraphQL</li>
        <li>Git + GitHub</li>
        <li>Packet Tracer</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind</li>
        <li>React Native</li>
        <li>Express</li>
        <li>Figma</li>
        <li>Apollo Client</li>
        <li>NPM</li>
      </ul>
    </section>`;
  }

  get _contactTpl() {
    return html` <section>
      <h2>Contacto</h2>
      <ul class="contact-list">
        <li>
          <a href="mailto:Javier.bz.gt@gmail.com">Javier.bz.gt@gmail.com</a>
        </li>
        <li><a href="tel:+522462383804">+52 246 238 3804</a></li>
        <li>
          <a href="https://github.com/JavGt">github.com/JavGt</a>
        </li>
        <li>Tlaxcala, México</li>
        <li>Francisco Javier Báez Gutiérrez</li>
      </ul>
    </section>`;
  }

  get _experienceTpl() {
    return html`<section>
                <h2>Experiencia</h2>

                <article class="job">
                  <h3>Front-End</h3>
                  <span class="company">BBVA</span>
                  <p class="dates">Mayo 2025 - actual</p>
                  <ul>
                    <li>Desarrollador front-end en tecnología cells.</li>
                    <li>
                      Owner en un repositorio para gestionar repositorio global.
                    </li>
                  </ul>
                </article>

                <article class="job">
                  <h3>Front-End</h3>
                  <span class="company">Didacteca</span>
                  <p class="dates">Nov. 2024 - May. 2025</p>
                  <ul>
                    <li>
                      Cambio y gestión de arquitectura de librerías a monorepos
                      para una mejor experiencia de desarrollo.
                    </li>
                  </ul>
                </article>

                <article class="job">
                  <h3>Front-End</h3>
                  <span class="company">BranchBit</span>
                  <p class="dates">Sept. 2024 - dic. 2024</p>
                  <ul>
                    <li>
                      Front-end para Banco Azteca en aperturas de cuentas y
                      portabilidad de nómina; corrección de errores en React
                      v16.
                    </li>
                  </ul>
                </article>

                <article class="job">
                  <h3>Líder Front-End</h3>
                  <span class="company">Editorial K-tdra</span>
                  <p class="dates">Feb. 2022 - sept. 2024</p>
                  <ul>
                    <li>
                      Migré y optimicé proyectos front-end con Vite y Next.js,
                      mejorando la estructura, organización y eficiencia del
                      desarrollo.
                    </li>
                    <li>
                      Diseñé y desarrollé librerías reutilizables de componentes
                      y recursos visuales, promoviendo la modularidad y
                      escalabilidad del código.
                    </li>
                    <li>
                      Implementé y administré GraphQL para una gestión de datos
                      más eficiente, reduciendo redundancia y mejorando el
                      rendimiento.
                    </li>
                    <li>
                      Maqueté vistas complejas con interfaces interactivas y
                      animaciones, mejorando la experiencia de usuario y la
                      usabilidad general.
                    </li>
                  </ul>
                </article>
              </section>
            </div>
         `;
  }

  render() {
    return html`
      <main class="scene">
        <article class="cv" id="cv">
          <header class="hero">
            <h1>Francisco Javier Baez Gutierrez</h1>
            <p class="role">Front-End Developer</p>
          </header>

          <div class="content">
            <div class="column">
              ${this._profileTpl} ${this._educationTpl} ${this._achievementsTpl}

              ${this._skillsTpl}
            </div>

            <div class="column column--right">
              ${this._contactTpl}

              ${this._experienceTpl}

               </div>
        </article>

              
      </main>
    `;
  }
}

export default AppCV;

declare global {
  interface HTMLElementTagNameMap {
    "app-cv": AppCV;
  }
}
