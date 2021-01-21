import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import { Character } from "../entities/Character"
import { MyContext } from '../types'

@InputType()
class CharacterInput {
  @Field(() => String)
  name!: string
}

@Resolver(Character)
export class CharacterResolver {

  @Query(() => [Character])
  async characters(@Ctx() { em }: MyContext) {
    const characters = await em.find(Character, {})
    return characters
  }

  @Mutation(() => Character)
  async addCharacter(@Arg('data') data: CharacterInput, @Ctx() { em }: MyContext) {
    const character = em.create(Character, data)
    await em.persistAndFlush(character)
    return character
  }
}
