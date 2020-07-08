import { Lambda } from 'aws-sdk'
const lambda = new Lambda({
  region: process.env.REGION,
})

// :: ---

const { FUNCTION_PREFIX } = process.env
const CHOICES = 10

const invokeLambda = async (name, payload) => {
  const params = {
    FunctionName: name,
    InvocationType: 'RequestResponse',
    Payload: payload ? JSON.stringify(payload) : null,
  }

  const response = await lambda.invoke(params).promise()
  console.log(response)
  return JSON.parse(response.Payload).body
}

const invokeRandom = (type) => {
  const suffix = ~~(Math.random() * CHOICES)
  const functionName = `${FUNCTION_PREFIX}-${type}-${suffix}`

  return invokeLambda(functionName)
}

export const handler = async () => {
  const tasks = [
    invokeRandom('verb'),
    invokeRandom('color'),
    invokeRandom('adjective'),
    invokeRandom('descriptor'),
    invokeRandom('noun'),
  ]

  const phrase = (await Promise.all(tasks)).join('-')

  return {
    statusCode: 200,
    body: JSON.stringify(phrase),
  }
}
