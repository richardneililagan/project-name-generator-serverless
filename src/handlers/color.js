const faker = require('faker')
import { sanitize } from '../helpers/sanitize'

// :: ---

const statusCode = 200

// :: ---

export const handler = async () => {
  const color = faker.commerce.color()
  const body = sanitize(color)

  return { statusCode, body }
}
