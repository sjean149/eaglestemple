# Deploying Eagles Temple on Render

Right now only the **website** (`client/`) is deployed. [`render.yaml`](render.yaml) defines just the static site. The full setup with the Postgres database and the Express API (`server/`) is waiting in [`render.full.yaml`](render.full.yaml).

## Deploy the website (current)

1. Push this branch to GitHub.
2. In Render: **New > Blueprint**, connect `sjean149/eaglestemple`, and choose this branch.
3. When asked, enter `VITE_YOUTUBE_API_KEY` (use a **new** key; see "Secrets that were committed before").
4. Click **Apply**. The site will be at something like `https://eaglestemple-site.onrender.com`.

Until the API is live, **Login, Register and Google sign-in won't work** on the deployed site. Everything else (sermons, giving, about and doctrine pages, map) works.

## Adding the backend later

1. Rename `render.full.yaml` to `render.yaml`, replacing the frontend-only file, and push.
2. In Render, open the existing Blueprint and **Sync** it. Render adds the database and API and keeps the existing site.
3. Follow the steps below for the remaining values.

## Full deploy (database + API + site)

1. Push this branch to GitHub.
2. In Render: **New > Blueprint**, connect `sjean149/eaglestemple`, and choose this branch.
3. Render asks for the `sync: false` values. On the first pass you won't know the final URLs yet, so enter placeholders and fix them in step 5:
   | Service | Variable | Value |
   |---|---|---|
   | eaglestemple-api | `GOOGLE_CLIENT_ID` | Your Google OAuth client ID |
   | eaglestemple-api | `CLIENT_URL` | The site URL, e.g. `https://eaglestemple-site.onrender.com` |
   | eaglestemple-site | `VITE_API_URL` | The API URL, e.g. `https://eaglestemple-api.onrender.com` |
   | eaglestemple-site | `VITE_YOUTUBE_API_KEY` | A YouTube Data API key (use a **new** key; see below) |
   | eaglestemple-site | `VITE_GOOGLE_CLIENT_ID` | Same Google OAuth client ID |
4. Click **Apply**. `JWT_SECRET` and `DATABASE_URL` are filled in automatically, and the API creates the `users` table on start (`npm run db:init`).
5. Once both services have their real `.onrender.com` URLs, update `CLIENT_URL` and `VITE_API_URL` if needed, then **Manual Deploy** the site (Vite bakes `VITE_*` values in at build time).

## Google sign-in

In Google Cloud Console > Credentials > your OAuth client, add the site URL (and any custom domain) to **Authorized JavaScript origins**.

## Custom domain

Add it under the site's **Settings > Custom Domains**, then add the domain to `CLIENT_URL` (comma-separated) and to the Google OAuth origins.

## Secrets that were committed before

`client/.env`, `server/.env` and a YouTube key in `client/.env.example` were in Git history. They are untracked now, but the old values are still in the repo history, so rotate them: the database password, `JWT_SECRET`, and the YouTube API key.

## Free plan notes

- The free API sleeps after ~15 minutes idle; the first request after that takes up to a minute.
- Free Render Postgres databases expire after 30 days. Upgrade the database plan before that if real member data is stored.

## Local development

Copy `client/.env.example` to `client/.env` and `server/.env.example` to `server/.env`, fill them in, run `npm run db:init --prefix server` once, then `npm run dev` from the repo root.
