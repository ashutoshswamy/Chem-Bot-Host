const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("atom")
    .setDescription("Get info about an atom"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const atomEmbed = new discord.EmbedBuilder()
      .setColor("Blurple")
      .setThumbnail(
        client.user.displayAvatarURL({
          size: 256,
        })
      )
      .setTitle("Atom")
      .setDescription(
        "An atom is a particle that consists of a nucleus of protons and neutrons surrounded by a cloud of electrons. The atom is the basic particle of the chemical elements, and the chemical elements are distinguished from each other by the number of protons that are in their atoms.\n\nClick [here](https://en.wikipedia.org/wiki/Atom) for more info!"
      )
      .setFooter({
        text: "Data from Wikipedia",
      });

    await interaction.reply({
      embeds: [atomEmbed],
    });
  },
};
