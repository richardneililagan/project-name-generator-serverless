const NOUNS = 10
const VERBS = 10
const ADJECTIVES = 10
const COLORS = 10
const DESCRIPTORS = 10

// :: ---

const createHandler = (type, i) => {
  const handler = `src/handlers/${type}.handler`
  const name = `${type}-${i}`

  return {
    [name]: { handler },
  }
}

const createHandlerSet = (type, count) => {
  const handlerSet = Array(count)
    .fill(0)
    .map((_, i) => createHandler(type, i))
    .reduce((a, v) => ({ ...a, ...v }), {})

  return handlerSet
}

/**
 * Builds a map of functions to deploy via serverless.
 * @param {Object} sls The serverless object.
 */
module.exports = (sls) => {
  return {
    ...createHandlerSet('noun', NOUNS),
    ...createHandlerSet('adjective', ADJECTIVES),
    ...createHandlerSet('verb', VERBS),
    ...createHandlerSet('color', COLORS),
    ...createHandlerSet('descriptor', DESCRIPTORS),
    entrypoint: {
      handler: 'src/handlers/entrypoint.handler',
      events: [
        {
          http: {
            path: 'generate',
            method: 'GET',
          },
        },
      ],
    },
  }
}
