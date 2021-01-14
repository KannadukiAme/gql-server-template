import { Character } from "./entities/Character"

export default {
  entities: [Character],
  dbName: 'mydb',
  type: 'mongo', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
  clientUrl: 'mongodb://root:example@localhost:27017'
}