import { createStore } from "zustand/vanilla";
import container from "@/scss/utils/container.scss?inline";
import title from "@/scss/utils/title.scss?inline";

const initialUtilities = {
  container: container,
  title: title,
} as const;

export type UtilityKey = keyof typeof initialUtilities;

type UtilitiesState = {
  utilities: Record<UtilityKey, string>;
};

export const utilitiesStore = createStore<UtilitiesState>()(() => ({
  utilities: initialUtilities,
}));
