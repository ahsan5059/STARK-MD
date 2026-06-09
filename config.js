const fs = require('fs'),
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://stark-pair.vercel.app";

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "STARK-MD=="ALI-MD~H4sIAAAAAAAAA5VU25KiOhT9l7xqjdxUsKqrJlwUpPGubXtqHqIEjJBAhwDilP9+Cme6Zx7OTPXhKSSw19prrZ3vgGWkwD5uwOg7yDmpkMDtUjQ5BiNgllGEOeiCEAkERgA7NwTrcThe96qVqVu+bbg3lx6D6YbhZL8xhoe9ui8NnWpP4N4FeXlMyekvBUWiRmIfBcic9NfDwTkxZkGwzzudN38m+jTqG516l6qL+fn0BO5tRUQ4YbGTnzHFHKU+bhaI8M/RT54v1XYwN9kLpWMvX5twk7BQVEif6K/n4eomUmcldLRx6s/RT+WGr0Si6kpn6tlkWS+8q+uIga5YW9tzjzNkD0ILQraUftAvSMxw6IWYCSKaT+v+5lD6FpCIaifH968HvyehzDeOb94apWpnsdmq2iqX2ZEVnyMOC5zOdj0SbGKVN/YkDkLMj7HVcVkUVD0pD5LFUnd3ier8TnzB37OS/B/doXnsudqltucL2z4PyunRxOmrwjdiNUHpq2sEMynZRwOf6p+j749tM4XeXOIUOfBSpcLceFPYscNNGc3kYUScqjEuZ+4Uv+gjUfK/sTTctEkGumJYgwWxhoVx1fyNOV1dlbldK/0KSZft+syEegp5PJxRJLbPWImVKlOoddNW88XS9aPm2WbxfFsezECfEHP59OgowY0XgpF87wKOY1IIjgTJ2GNP1roAhdUanzgWD3kBzTzpUPt0XNOpmOaTgZ9tn30TGiyI1slO62F/cXX7y6O3fQJdkPPshIsChy4pRMabABcFinEBRv986wKGr+KHcS2cLqtdEBFeiC0r8zRD4butH6fodMpKJtYNO1ntAnMwkn5tYyEIi4tWyZIhfjqTCltnJAowilBa4I8eMcchGAle4o+5tbKwlf6gOpK7XI9BF9CHJSRsDVBUTZPkoSqpykj+Wnyp26ooz78wLEAXpI+vZLU/GGpyX5eHuqrrI/lru3//4NeWC7FAJC3ACFiLaKJgz3R8pc5CZzKBTgytGIJf/bxH44f0r5v5YObTqbOuev7xRYNNz57ujMrr9aSBGuyveOkMImtH1fjpP4q0kAxtQ68z7L8G6BmjMc4aWAqF1DKsGaw7L27vMLn2b3ExhITyaJrlNL/hoPOy1PzD/Hg9F/KMv0nhYZK6zvw4TMgJwqcWLcQVOeHfwc7pfFY3vnrqW5OZZB/s3bGBmp76nezSkeKZkLfsksDnyfjUk1dyaNoU6i9DZaVCsnl+sdBy0JT781s4xwW9rLkS0tj6GdrH0KQ/LyvyiFPrVPsaEfyYfYZa//7gyTvfNljSvfvbrz8vkT8Movni3MrLOicrh/caKpcwqOpmFx2bRc+Yi9tY3yfmnNXpQWjgfv/WBXmKRJRxCkYAsZBnD3CelW1QPRZlfwGzoOdZMB63DaeoEPBX+DeE4kIgmoORPNRlSdENRe4C2sA8Xwsk3ocGwPYxjTW4/wsO81ekUQcAAA==
    SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", // Add multiple numbers with country codes without (+), separated by comma
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // ✅ only ONE, default = true
    AUTO_STATUS_VIEWS: process.env.AUTO_STATUS_VIEWS || "true",
    AUTO_STATUS_REACTS: process.env.AUTO_STATUS_REACTS || "true",
    AUTO_STATUS_EMOJIS: process.env.AUTO_STATUS_EMOJIS || "❤️,💀,🌚,🌟,🔥,❤️‍🩹,🌸,🍁,🍂,🦋,🍥,🍧,🍨,🍫,🍭,🎀,🎐,🎗️,👑,🚩,🇵🇰,🍓,🍇,🧃,🗿,🎋,💸,🧸,🦢,✨,🌾,🌊,⚡,🌏,🕸️,🎀,🪄,🌝,🌜,💫,🤍,🖤,🤎,💜,💙", // Input your custom emojis
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ STATUS VIEWED BY STARK-MD", // Custom message
    MODE: process.env.MODE || "public", // Options: private, public, inbox, groups
    TGTOKEN:process.env.TGTOKEN || "7672295852:AAG0SEMHbM1jhkpodxHspJuVT5tiAhXPPpI",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923437393822", // Only 1 owner number here, others add to sudo numbers
    OWNER_NAME: process.env.OWNER_NAME || "𓂃ᷱ᪳𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄^᪲᪲᪲輪", // Custom name
    PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Custom
    PACK_NAME: process.env.PACK_NAME || "",
    PREFIX: process.env.PREFIX || ".",
    VERSION: process.env.VERSION || "9.0.0",
    ANTI_LINK: process.env.ANTI_LINK || "false", // true = kick, delete = delete, warn = warn
    ANTI_CALL: process.env.ANTI_CALL || "false",
    ANTIBAD: process.env.ANTIBAD || "false",
    BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Will be deleted if ANTIBAD is true
    ANTI_CALL_MSG: process.env.ANTI_CALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐒𝐓𝐀𝐑𝐊-𝐌𝐃ှ᪳𓆪", // Don't change
    BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", // Don't change
    AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "STARK MD ALIVE",
    WELCOME: process.env.WELCOME || "false",
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // true = bluetick all messages, commands = bluetick commands only
    AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Multiple country codes separated by comma
    PRESENCE: process.env.PRESENCE || "null", // typing, recording, online, null
    TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter your timezone
};

// Auto-reload this config when file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update '${__filename}'`);
    delete require.cache[file];
    require(file);
});
