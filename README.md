# Kbot
Discord bot using DiscordJS 13 & NodeJS 16!. This is not meant to be an eleborate bot but just some utility functions and cool things for my friends and to learn some NodeJS and modern Development and Deployment

# Set Up
- git clone repository
- npm install
- setup heroku project and a local .env with TOKEN (discord bot token), guildId with your test servers guildId and clientId from discord dev portal.
- local environment uses dotenv and a .env file

# Running
npm start or heroku local if you are using the heroku cli tool. Should work with tools like nodemon.

# Adding commands
add commands following template or `ping.js` to commands folder. when finished run `deploy-commands.js` to deploy your slash commands to Discord

# Events
 same as commands, add to events folder following the other commands. Specify once: true for events only running once such as on ready.

 # Docs
 https://discordjs.guide/ and https://discord.js.org/#/docs/main/stable/general/welcome , https://discord.com/developers