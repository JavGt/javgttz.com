import { unsafeCSS, type CSSResult } from "lit";

import { utilitiesStore, type UtilityKey } from "@/stores/utilities.store";

const cache = new Map<UtilityKey, CSSResult>();

function getStyle(key: UtilityKey): CSSResult {
  const cachedStyle = cache.get(key);

  if (cachedStyle) {
    return cachedStyle;
  }

  const cssSource = utilitiesStore.getState().utilities[key];
  const style = unsafeCSS(cssSource);

  cache.set(key, style);

  return style;
}

export const utilityStyles = {
  use(keys: UtilityKey | readonly UtilityKey[]): CSSResult[] {
    const requestedKeys = Array.isArray(keys) ? keys : [keys];

    return requestedKeys.map(getStyle);
  },
};
