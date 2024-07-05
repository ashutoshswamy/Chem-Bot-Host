const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("support")
    .setDescription("Join my support server"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const supportEmbed = new discord.EmbedBuilder()
      .setColor("Blurple")
      .setDescription(
        "Click on the below link to join my support server!\nhttps://bit.ly/supportchembot"
      );

    await interaction.reply({
      embeds: [supportEmbed],
    });
  },
};
