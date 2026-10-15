import { Bot } from 'grammy'

const token = process.env.BOT_TOKEN
if (!token) {
  throw new Error('BOT_TOKEN is not set')
}

const bot = new Bot(token)

bot.command('start', (ctx) => ctx.reply("Hi! I'm ChubbicornBot."))
bot.command('help', (ctx) =>
  ctx.reply('Commands:\n/start - say hi\n/help - show this message'),
)

bot.catch((err) => {
  console.error(`Error handling update ${err.ctx.update.update_id}:`, err.error)
})

// Railway sends SIGTERM when replacing a deployment; stopping cleanly
// confirms the last update offset so nothing is processed twice.
process.once('SIGINT', () => bot.stop())
process.once('SIGTERM', () => bot.stop())

await bot.api.setMyCommands([
  { command: 'start', description: 'Say hi' },
  { command: 'help', description: 'Show available commands' },
])

await bot.start({
  onStart: (me) => console.log(`Running as @${me.username}`),
})
