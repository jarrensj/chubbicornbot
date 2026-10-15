# Chubbicorn Bot

Telegram bot at [t.me/Chubbicorn_bot](https://t.me/Chubbicorn_bot), built with [grammY](https://grammy.dev) and deployed on [Railway](https://railway.com).

## Local development

Requires Node 24.

```sh
npm install
cp .env.example .env   # then fill in BOT_TOKEN from @BotFather
npm run dev
```

The bot uses long polling, so only one instance can run per token. Stop the Railway deployment (or use a separate test bot token) while running locally, otherwise the two instances will fight over updates.

## Deployment

Railway builds with Railpack, which detects Node from `package.json`, runs `npm run build`, then `npm start`. The only required variable is `BOT_TOKEN`. Keep the service at one replica.
