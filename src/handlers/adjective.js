const faker = require('faker')
import { sanitize } from '../helpers/sanitize'

// :: ---

const statusCode = 200

// :: ---

export const handler = async () => {
  const adjective = faker.company.bsAdjective()
  const body = sanitize(adjective)

  return { statusCode, body }
}
