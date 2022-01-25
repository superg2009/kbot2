const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wfelements')
		.setDescription('Sends Element Combos from Warframe'),
	async execute(interaction) {
		await interaction.reply('https://i.redd.it/dabd9442mnfy.png');
	},
};