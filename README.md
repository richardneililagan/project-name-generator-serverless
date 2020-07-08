# Serverless Project Name Generator

An excessively convoluted random project name generator.
Created as part of a serverless demonstration.

## Usage

This project uses the [Serverless Framework][sls].
Ensure that you've set up your AWS credentials according to the steps
[provided here][sls-setup].

```bash
npm i -g serverless
```

To deploy into your AWS account:

```bash
sls deploy
```

This will deploy an **entrypoint** Lambda function,
accessible from behind an [API Gateway][apig], along with 10x each
of five types of generator functions (by default).

To generate a project name, just HTTP GET the entrypoint URL,
or run `sls invoke -f entrypoint`.

## Important

Please don't create a real project name generator this way.

---

[@techlifemusic][twitter]

[twitter]: https://twitter.com/techlifemusic
[sls]: https://serverless.com
[sls-setup]: https://www.serverless.com/framework/docs/providers/aws/guide/credentials/
[apig]: https://aws.amazon.com/api-gateway
