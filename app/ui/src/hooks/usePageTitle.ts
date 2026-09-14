import { useEffect } from "react";

/** Brand suffix every in-app title carries, and the title the tab falls back to. */
export const SITE_NAME = "STRATO";
export const DEFAULT_TITLE = "STRATO | Where Stability Meets Opportunity";

/**
 * `"Rewards"` -> `"Rewards | STRATO"`. Titles that already carry the brand —
 * the home page's tagline and the landing pages' fully-formed titles — are left
 * alone rather than picking up a second suffix.
 */
export const formatPageTitle = (title?: string | null): string => {
  const trimmed = title?.trim();
  if (!trimmed) return DEFAULT_TITLE;
  if (trimmed === SITE_NAME || trimmed === DEFAULT_TITLE) return trimmed;
  if (trimmed.endsWith(` | ${SITE_NAME}`)) return trimmed;
  return `${trimmed} | ${SITE_NAME}`;
};

/**
 * Sets the browser tab title for the mounted page and restores the default on
 * unmount, so a route that has nothing to say never inherits the previous
 * page's title. Pass `undefined`/`null` (e.g. while a record is still loading)
 * to show the default until the real title is known.
 */
export const usePageTitle = (title?: string | null): void => {
  useEffect(() => {
    document.title = formatPageTitle(title);
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
};

export default usePageTitle;
