import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

// augment ImportMeta to include env (Vite's import.meta.env)
declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL: string
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export const env = envSchema.parse(import.meta.env)