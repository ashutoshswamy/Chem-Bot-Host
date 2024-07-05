const axios = require("axios");
const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("elementinfo")
    .setDescription("Get info about a particular element of the Periodic Table")
    .addStringOption((option) =>
      option
        .setName("element_name")
        .setDescription("Enter an element name")
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let elementName = interaction.options.getString("element_name");

    try {
      const url = "https://en.wikipedia.org/w/api.php";

      const params = {
        action: "query",
        format: "json",
        prop: "extracts",
        exintro: "",
        explaintext: "",
        titles: elementName,
      };

      const response = await axios.get(url, { params });
      const data = response.data;

      const pageId = Object.keys(data.query.pages)[0];
      const page = data.query.pages[pageId];

      const title = page.title;
      const extract = page.extract;

      const elementinfoEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setThumbnail(
          client.user.displayAvatarURL({
            size: 256,
          })
        )
        .setTitle(title)
        .setURL(`https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`)
        .setDescription(extract)
        .setFooter({
          text: "Data from Wikipedia",
        });

      await interaction.reply({
        embeds: [elementinfoEmbed],
      });
    } catch (err) {
      console.log(err);
    }
  },
};
