const discord = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("gif")
    .setDescription("Get a GIF from Tenor")
    .addStringOption((option) =>
      option
        .setName("search_query")
        .setDescription("Enter a search query")
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let searchQuery = interaction.options.getString("search_query");
    const url = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(
      searchQuery
    )}&key=${process.env.tenor_api_key}&limit=8`;

    axios.default.get(url).then(async (res) => {
      await interaction.reply({
        content: res.data.results[Math.floor(Math.random() * 7)].url,
      });
    });
  },
};
