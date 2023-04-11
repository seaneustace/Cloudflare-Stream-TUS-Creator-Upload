# Cloudflare-Stream-TUS-Creator-Upload
A guide on how to implement advanced upload using tus, according to Cloudflare's documentation.

# About

TUS is a protocol that uses resumable uploads. Cloudflare Stream uses TUS for video uploads over 200MB.

Cloudflare provides some example an how this may look, I will show how the following steps might look inside a worker:

> Step 1: Create your own API endpoint that returns an upload URL

> Step 2: Use this API endpoint with your tus client

https://developers.cloudflare.com/stream/uploading-videos/direct-creator-uploads/

These steps can be combined into a single worker that you can deploy to your account.

# Prerequisites:

- [Cloudflare Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Cloudflare Stream](https://developers.cloudflare.com/stream/uploading-videos/direct-creator-uploads/)

# Installing:

Login into your account:

`wrangler login`

Clone the project:

`npx wrangler generate <NEW_PROJECT_NAME> <GITHUB_REPO_URL>`

Select the project:

`cd <NEW_PROJECT_NAME>`

Add your environment variables:

```
npx wrangler secret put CLOUDFLARE_ACCOUNT_ID
npx wrangler secret put CLOUDFLARE_API_TOKEN
```

# Publish:

`npx wrangler publish`

That's it and you're done! Go checkout the demo I have here: https://openvideo.net/tus
