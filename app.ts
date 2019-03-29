import 'reflect-metadata'
import * as Koa from 'koa'
import { Container } from 'typedi'
import { useKoaServer, useContainer } from 'routing-controllers'
import * as bodyParser from 'koa-bodyparser'
import { SessionsController } from './controller'
const koa: Koa = new Koa()

const app = useKoaServer(koa, {
  controllers: [SessionsController],
})

useContainer(Container)

app.use(bodyParser())

app.listen(3000, () => {
  console.log(`server listening on 3000.`)
})
