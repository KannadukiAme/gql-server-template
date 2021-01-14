import 'reflect-metadata'
import { MikroORM } from '@mikro-orm/core'
import Koa from 'Koa'
import { ApolloServer } from 'apollo-server-koa'
import { buildSchema } from 'type-graphql'
import { CharacterResolver } from './resolvers/CharacterResolver'

const app = new Koa()

const main = async () => {
  const orm = await MikroORM.init()

  const gqlServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [CharacterResolver],
      validate: false
    }),
    context: () => ({ em: orm.em })
  })

  gqlServer.applyMiddleware({ app })
  app.listen({ port: 4000 }, () => {
    console.log(`server start at http://localhost:4000${gqlServer.graphqlPath}`)
  })
}

main().catch(err => {
  console.error(err)
})
