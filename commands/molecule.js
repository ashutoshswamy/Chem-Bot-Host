const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("molecule")
    .setDescription("Get info about a molecule"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const moleculeEmbed = new discord.EmbedBuilder()
      .setColor("Blurple")
      .setThumbnail(
        client.user.displayAvatarURL({
          size: 256,
        })
      )
      .setTitle("Molecule")
      .setDescription(
        "A molecule is a group of two or more atoms held together by attractive forces known as chemical bonds; depending on context, the term may or may not include ions which satisfy this criterion.\n\nClick [here](https://en.wikipedia.org/wiki/Molecule) for more info!"
      )
      .setFooter({
        text: "Data from Wikipedia",
      });

    await interaction.reply({
      embeds: [moleculeEmbed],
    });
  },
};
