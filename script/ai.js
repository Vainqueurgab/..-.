const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: '𝗮𝗲𝘀𝘁𝗵𝗲𝗿',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`🜋𝐆𝐀𝐁𝐑𝐈𝐄𝐋 𝐂𝐎𝐌𝐏𝐈𝐋𝐎𝐓🜋 \n●══════❍══════●\n 𝐲𝐨, 𝐒𝐚𝐥𝐮𝐭 𝐣𝐞 𝐦'𝐚𝐩𝐩𝐞𝐥𝐥𝐞 𝐀𝐈 , 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐩𝐞 𝐩𝐚𝐫 𝐥𝐞 🜋gabriel compilot🜋compilot 𝐩𝐨𝐬𝐞𝐳 𝐦𝐨𝐢 𝐯𝐨𝐭𝐫𝐞 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(``, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://hashier-api-globalgpt.vercel.app/api/globalgpt?q=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage('𝐐𝐮𝐞𝐥 𝐞𝐬𝐭 𝐯𝐨𝐭𝐫𝐞 𝐬𝐨𝐮𝐜𝐢\n●══════❍══════●\n┏━∪∪━━━━ღ❦ღ┓\n🌐['+ response +'] ♡\n♡   𝐨𝐥𝐢𝐯𝐞𝐫-[📩]\n┗ღ❦ღ━━━━━━━┛\n[✦]|𝗚𝗣𝗧-𝟰 ', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
