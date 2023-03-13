# ChatGPT-on-Discord using Discord Bot

This is a simple Discord bot that uses OpenAI's GPT-3 API to generate responses to messages that begin with a "#" symbol.

## How to Start the Bot

1. Install Node.js (version 14 or higher) on your machine if it is not already installed.

2. Clone this repository to your local machine using `git clone https://github.com/your-username/your-repo.git`.

3. Navigate to the project directory using the command line.

4. Run `npm install` to install the required dependencies.

5. Set your OpenAI API key and Discord bot token as environment variables. You can create a file named `.env` in the root directory of the project and add the following lines, replacing the placeholders with your actual API key and bot token:

OPENAI_API_KEY=your_openai_api_key_here
DISCORD_BOT_TOKEN=your_discord_bot_token_here

6. Start the bot by running `node bot.js`. You should see a message in the console indicating that the bot is connected and ready.

7. You can now test the bot by sending a message in a Discord channel that the bot has access to. Start your message with the "#" symbol, and the bot should respond with a generated message.
