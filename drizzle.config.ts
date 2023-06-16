import type { Config } from 'drizzle-kit'
import 'dotenv/config'

export default {
  schema: './src/lib/db/schema.ts',
  out: './src/lib/db/migrations',
  connectionString: process.env.DATABASE_URL,
  breakpoints: true,
} satisfies Config
