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

export const faultyHandler = async () => {
  const badTask = new Promise((resolve) => {
    const response = handler()
    setTimeout(() => resolve(response), 1500)
  })

  return badTask
}
