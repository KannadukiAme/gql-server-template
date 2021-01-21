import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "@mikro-orm/core"
import { ObjectId } from "@mikro-orm/mongodb"
import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
@Entity()
export class Base {
  @Field(() => ID)
  @PrimaryKey()
  _id!: ObjectId

  @Field(() => String)
  @SerializedPrimaryKey()
  id!:string

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();
}