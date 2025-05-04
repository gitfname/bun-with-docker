import { zValidator } from "@hono/zod-validator"
import { z } from "zod"

const paginationSchema = z.object({
    limit: z.coerce.number().int().min(0).max(40).default(10),
    skip: z.coerce.number().int().min(0).default(0),
})

export const pagination = zValidator("query", paginationSchema)