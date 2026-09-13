import { html } from "lit";
import "@/pages/home";
import "@/pages/cv";

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

export const ROUTES = [
  {
    path: `${BASE_PATH}/`,
    render: () => html`<home-page></home-page>`,
  },
  {
    path: `${BASE_PATH}/cv`,
    render: () => html`<cv-page></cv-page>`,
  },
];
