/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ASSETS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
