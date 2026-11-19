/**
 * Host half of the EXV Theme Visual bundle.
 *
 * The bundle only declares one plugin row (theme-visual) through cordis.patch.yml;
 * the actual work is client-side, in client.js. Keeping the Host half empty means
 * visual packs can be added or removed without touching the base theme.
 */
export function apply() {}
