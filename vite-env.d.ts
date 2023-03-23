/// <reference types="vite/client" />

interface Envs {
  ANALYZE?: "true";
}

interface ImportMetaEnv extends Envs {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  export interface ProcessEnv extends Envs {}
}
