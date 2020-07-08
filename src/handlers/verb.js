const faker = require('faker')
import { sanitize } from '../helpers/sanitize'

// :: ---

const statusCode = 200

// :: ---

export const handler = async () => {
  const verb = faker.hacker.ingverb()
  const body = sanitize(verb)

  return { statusCode, body }
}
