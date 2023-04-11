# Cloudflare-Stream-TUS-Creator-Upload
TUS is a protocol that uses resumable uploads. Cloudflare Stream uses TUS for video uploads over 200MB.

# Purpose

To demonstrate how to implement advanced upload flow using tus, for large videos from the examples given in Cloudflare's documentation.

https://developers.cloudflare.com/stream/uploading-videos/direct-creator-uploads/

> Step 1: Create your own API endpoint that returns an upload URL
> Step 2: Use this API endpoint with your tus client

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
npx wrangler secret put ACCOUNT_ID_DEMO
npx wrangler secret put TOKEN_DEMO
```

Publish:

`npx wrangler publish`

That's it and you're done! Go checkout the demo I have here: https://openvideo.net/tus
