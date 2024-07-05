const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite me to your server"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const inviteEmbed = new discord.EmbedBuilder()
      .setColor("Blurple")
      .setDescription(
        "Click on the below link to invite me!\nhttps://bit.ly/invitechembot"
      );

    await interaction.reply({
      embeds: [inviteEmbed],
    });
  },
};
