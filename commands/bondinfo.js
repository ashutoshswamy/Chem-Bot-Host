const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("bondinfo")
    .setDescription("Get info about a chemical bond")
    .addStringOption((option) =>
      option
        .setName("bond_name")
        .setDescription("Select a chemical bond")
        .addChoices(
          {
            name: "Ionic Bond",
            value: "ionic",
          },
          {
            name: "Covalent Bond",
            value: "covalent",
          },
          {
            name: "Co-ordinate Bond",
            value: "coordinate",
          }
        )
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let bondName = interaction.options.getString("bond_name");

    if (bondName === "ionic") {
      const ionicEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setThumbnail(
          client.user.displayAvatarURL({
            size: 256,
          })
        )
        .setTitle("Ionic Bond")
        .setDescription(
          "Ionic bonding is a type of chemical bonding that involves the electrostatic attraction between oppositely charged ions, or between two atoms with sharply different electronegativities, and is the primary interaction occurring in ionic compounds.\n\nClick [here](https://en.wikipedia.org/wiki/Ionic_bonding) for more info!"
        )
        .setFooter({
          text: "Data from Wikipedia",
        });

      await interaction.reply({
        embeds: [ionicEmbed],
      });
    } else if (bondName === "covalent") {
      const covalentEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setThumbnail(
          client.user.displayAvatarURL({
            size: 256,
          })
        )
        .setTitle("Covalent Bond")
        .setDescription(
          "A covalent bond is a chemical bond that involves the sharing of electrons to form electron pairs between atoms. These electron pairs are known as shared pairs or bonding pairs. The stable balance of attractive and repulsive forces between atoms, when they share electrons, is known as covalent bonding. For many molecules, the sharing of electrons allows each atom to attain the equivalent of a full valence shell, corresponding to a stable electronic configuration. In organic chemistry, covalent bonding is much more common than ionic bonding.\n\nClick [here](https://en.wikipedia.org/wiki/Covalent_bond) for more info!"
        )
        .setFooter({
          text: "Data from Wikipedia",
        });

      await interaction.reply({
        embeds: [covalentEmbed],
      });
    } else if (bondName === "coordinate") {
      const coordinateEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setThumbnail(
          client.user.displayAvatarURL({
            size: 256,
          })
        )
        .setTitle("Co-ordinate Bond")
        .setDescription(
          "In coordination chemistry, a coordinate covalent bond, also known as a dative bond, dipolar bond, or coordinate bond is a kind of two-center, two-electron covalent bond in which the two electrons derive from the same atom. The bonding of metal ions to ligands involves this kind of interaction.\n\nClick [here](https://en.wikipedia.org/wiki/Coordinate_covalent_bond) for more info!"
        )
        .setFooter({
          text: "Data from Wikipedia",
        });

      await interaction.reply({
        embeds: [coordinateEmbed],
      });
    }
  },
};
