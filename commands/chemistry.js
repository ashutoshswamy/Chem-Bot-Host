const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("chemistry")
    .setDescription("Get info about the subject chemistry"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const chemistryEmbed = new discord.EmbedBuilder()
      .setColor("Blurple")
      .setThumbnail(
        client.user.displayAvatarURL({
          size: 256,
        })
      )
      .setTitle("Chemistry")
      .setDescription(
        "Chemistry is the scientific study of the properties and behavior of matter. It is a physical science under natural sciences that covers the elements that make up matter to the compounds made of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances. Chemistry also addresses the nature of chemical bonds in chemical compounds.\n\nClick [here](https://en.wikipedia.org/wiki/Chemistry) for more info!"
      )
      .setFooter({
        text: "Data from Wikipedia",
      });

    await interaction.reply({
      embeds: [chemistryEmbed],
    });
  },
};
