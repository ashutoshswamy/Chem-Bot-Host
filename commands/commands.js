const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("commands")
    .setDescription("View all the commands of Chem Bot")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Select a category")
        .addChoices(
          {
            name: "Chemistry",
            value: "chemistry",
          },
          {
            name: "Fun",
            value: "fun",
          },
          {
            name: "Moderation",
            value: "moderation",
          },
          {
            name: "Utility",
            value: "utility",
          }
        )
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let category = interaction.options.getString("category");

    if (category === "chemistry") {
      const chemistryEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setTitle("Chemistry commands")
        .setDescription(
          "`chemistry`, `atom`, `molecule`, `ion`, `elementinfo`, `bondinfo`, `periodictable`"
        );

      await interaction.reply({
        embeds: [chemistryEmbed],
      });
    } else if (category === "fun") {
      const funEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setTitle("Fun commands")
        .setDescription("`meme`, `gif`, `dadjoke`, `chucknorris`");

      await interaction.reply({
        embeds: [funEmbed],
      });
    } else if (category === "moderation") {
      const moderationEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setTitle("Moderation commands")
        .setDescription("`kick`, `ban`, `timeout`, `clear`");

      await interaction.reply({
        embeds: [moderationEmbed],
      });
    } else if (category === "utility") {
      const utilityEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setTitle("Utility commands")
        .setDescription("`info`, `invite`, `support`, `ping`, `commands`");

      await interaction.reply({
        embeds: [utilityEmbed],
      });
    }
  },
};
