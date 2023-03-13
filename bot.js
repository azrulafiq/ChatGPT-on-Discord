const Eris = require("eris");
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

const bot = new Eris(process.env.DISCORD_BOT_TOKEN, {
    intents: [
        "guildMessages"
    ]
});

async function runCompletion (message) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        //model: "gpt-3.5-turbo",
        prompt: message,
        max_tokens: 200,
    });
    return completion.data.choices[0].text;
}

bot.on("ready", () => { 
    console.log("Bot is connected and ready!"); 
});

bot.on("error", (err) => {
  console.error(err); 
});

bot.on("messageCreate", async (msg) => {
    if (msg.content.startsWith("#")) {
        try {
	    bot.createMessage(msg.channel.id, "[Response starts here]");
            const response = await runCompletion(msg.content.substring(1));
            const messages = response.match(/.{1,2000}/g);
            for (const message of messages) {
                if (message.trim() !== "") {
                    bot.createMessage(msg.channel.id, message);
                }
            }
            bot.createMessage(msg.channel.id, "[Response ends here]");
        } catch (err) {
            console.error(err);
            bot.createMessage(msg.channel.id, "Sorry, I encountered an error while processing your request.");
        }
    }
});


bot.connect();


