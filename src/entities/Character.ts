import { Entity, PrimaryKey, Property } from "@mikro-orm/core"
import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
@Entity()
export class Character {
  @Field(() => ID)
  @PrimaryKey()
  _id!: string

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field(() => String)
  @Property({ type: 'text', unique: true })
  name!: string
}