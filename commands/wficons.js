const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wficons")
    .setDescription("Sends UI Icons from Warframe"),
  async execute(interaction) {
    await interaction.reply("https://i.redd.it/9k9rsj3g7bf21.png");
  },
};
