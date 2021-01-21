import { Entity, Property } from "@mikro-orm/core"
import { Field, ObjectType } from "type-graphql"
import { Base } from "./Base"

@ObjectType()
@Entity()
export class Character extends Base{
  @Field(() => String)
  @Property()
  name!: string
}