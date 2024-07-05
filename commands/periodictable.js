const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("periodictable")
    .setDescription("Get an image of the periodic table"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const periodictableEmbed = new discord.EmbedBuilder()
      .setColor("Blurple")
      .setTitle("Periodic Table")
      .setDescription(
        "Image Link - Click [here](https://i.ibb.co/tpDW1JG/PT.jpg)"
      )
      .setImage("https://i.ibb.co/tpDW1JG/PT.jpg");

    await interaction.reply({
      embeds: [periodictableEmbed],
    });
  },
};
