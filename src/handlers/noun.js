// const faker = require('faker')
import faker from 'faker'
import { sanitize } from '../helpers/sanitize'

// :: ---

const statusCode = 200

// :: ---

export const handler = async () => {
  const noun = faker.hacker.noun()
  const body = sanitize(noun)

  return { statusCode, body }
}

export const faultyHandler = async () => {
  throw new Error('Defecttttttttttttt!')
}
