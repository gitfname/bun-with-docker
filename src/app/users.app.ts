import { Hono } from "hono"

export const UsersApp = new Hono()

    .get(
        "/",
        (c) => {
            return c.json(Array.from({ length: 70 }).map((_, index) => ({ id: index, name: "user " + index, lastName: "user " + index + " last name" })))
        }
    )