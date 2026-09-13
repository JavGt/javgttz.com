import { html } from "lit";
import "@/pages/home";
import "@/pages/cv";

export const ROUTES = [
  { path: "/", render: () => html`<home-page></home-page>` },
  { path: "/cv", render: () => html`<cv-page></cv-page>` }
];
