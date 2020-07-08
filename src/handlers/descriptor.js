const faker = require('faker')
import { sanitize } from '../helpers/sanitize'

// :: ---

const statusCode = 200

// :: ---

export const handler = async () => {
  const descriptor = faker.company.catchPhraseDescriptor()
  const body = sanitize(descriptor)

  return { statusCode, body }
}
