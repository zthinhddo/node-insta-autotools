const LsInstagramBot = require("kls-instagram-api").default;

const bot = new LsInstagramBot({
  botName: "instalink",
  isDevelopment: true,
  logScreenshot: true,
  log: true,
});

async function startBot() {
  try {
    await bot.start();

    // TODO: Auto generate email and waiting for email verification

    // Register a new account from insta
    await bot.account.register({
      name: "Alisama Botan",
      birthdate: { year: 1990, month: 1, day: 1 },
      uname: "alisama_botan_1234",
      password: "Aword@123-secretbase-naisu",
      gender: "",
      registerByMail: true,
      mail: "alamarian-lanka@mailbox.com",
      phoneNumber: {countryCode: "+1", number: "66555634343" },
    });
  } catch (err) {
    console.error("Error starting bot: ", err);
  }
}

module.exports = startBot;
