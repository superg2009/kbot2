const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cetus")
    .setDescription("gets current Cetus Cycle"),
  async execute(interaction) {
    await interaction.deferReply();
    const data = await fetch("https://api.warframestat.us/pc/cetusCycle").then(
      (response) => response.json()
    );
    const state = data.state;
    const time = data.shortString;
    await interaction.editReply(
      `World State: ${state} Time to Switch: ${time}`
    );
  },
};
