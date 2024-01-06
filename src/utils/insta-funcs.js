const LsInstagramBot = require('kls-instagram-api').default

const bot = new LsInstagramBot({
  botName: 'instalink',
  isDevelopment: true,
  logScreenshot: true,
  log: true,
});

async function startBot() {
  try {
    await bot.start();
  } catch (err) {
    console.error('Error starting bot: ', err);
  }
}

module.exports = startBot;