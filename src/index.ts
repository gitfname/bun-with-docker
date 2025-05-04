import { Hono } from 'hono'
import { cors } from "hono/cors"


import { UsersApp } from './app/users.app'


const app = new Hono()
  .use(cors({
    origin: "*"
  }))
  .route("/users", UsersApp)

export default app
export type AppType = typeof app
