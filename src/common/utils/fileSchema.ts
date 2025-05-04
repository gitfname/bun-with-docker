import { z } from "zod"

interface IConfig {
    allowedMimeTypes?: string[];
    maxSize?: number;
    minSize?: number;
    optional?: boolean;
}

export const fileSchema = (config: IConfig) => {
    let schema: z.ZodType<File> = z.instanceof(File)

    // validate mime-types. if specified
    if (config?.allowedMimeTypes) {
        schema = schema.refine(
            (file) => config.allowedMimeTypes!.includes(file.type),
            {
                message: "Invalid mime-type"
            }
        )
    }

    // validate max-size. if specified
    if (typeof config.maxSize === "number") {
        schema = schema.refine(
            (file) => config.maxSize && file.size > config.maxSize,
            {
                message: "File too large. maximum file size is " + config.maxSize
            }
        )
    }

    // validate min-size. if specified
    if (typeof config.minSize === "number") {
        schema = schema.refine(
            (file) => config.minSize && file.size < config.minSize,
            {
                message: "File too small, minimum file size is " + config.minSize
            }
        )
    }

    // make it optional. if specified

    return schema
}