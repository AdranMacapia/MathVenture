# MATHSVENTURES

## Running locally
- Add the environment variables
- Run `pnpm install`, then `pnpm dev`

## Updating content via Sanity CMS
Content management in the platform is managed by [Sanity](https://www.sanity.io/). To view your dashboard, simply go to `/studio`.

### Demo video


## Managing Authentication and users
Authentication in the platform is done completely via [Clerk Auth](https://clerk.com/). To see the list of users or manage authentication, you can access that from your clerk account [here](https://dashboard.clerk.com/apps/app_2Z4WmNXwVYqZS8I7bQkLCOQKBtP/instances/ins_2Z4WmRsgi2g6ouosqDM4FTyS2lX).

You can also find a list of users on your sanity studio at `/studio/structure/user`



## Technologies
- Next.js
- Panda CSS
- Ark UI
- Sanity
- Clerk authentication

## Environment variables
You can find the missing values in your vercel account [here](https://vercel.com/{space}{project}/settings/environment-variables)

### Sanity env
- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET="production"
- NEXT_PUBLIC_SANITY_TOKEN 

### Clerk env
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY
- NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
- NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/simulations
- NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/complete-signup
- NEXT_PUBLIC_CLERK_SIGN_OUT_URL=/login

### Vercel env
- NEXT_PUBLIC_VERCEL_URL = "localhost:3000"
- NEXT_PUBLIC_PROTOCOL = "http"
- PROTOCOL = 'http'
- VERCEL_URL = "localhost:3000"

