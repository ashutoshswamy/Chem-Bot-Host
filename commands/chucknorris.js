const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("cnjoke")
    .setDescription("Get a random chuck norris joke"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    await interaction.reply({
      content: "This command is not available right now!",
    });
  },
};
