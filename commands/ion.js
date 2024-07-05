const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("ion")
    .setDescription("Get info about an ion")
    .addStringOption((option) =>
      option
        .setName("ion_name")
        .setDescription("Select an ion")
        .addChoices(
          {
            name: "Proton",
            value: "proton",
          },
          {
            name: "Electron",
            value: "electron",
          },
          {
            name: "Neutron",
            value: "neutron",
          }
        )
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let ionName = interaction.options.getString("ion_name");

    if (ionName === "proton") {
      const protonEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setThumbnail(
          client.user.displayAvatarURL({
            size: 256,
          })
        )
        .setTitle("Proton")
        .setDescription(
          "A proton is a stable subatomic particle, symbol p, H+, or 1H+ with a positive electric charge of +1 e (elementary charge). Its mass is slightly less than that of a neutron and 1,836 times the mass of an electron (the proton-to-electron mass ratio).\n\nClick [here](https://en.wikipedia.org/wiki/Proton) for more info!"
        )
        .setFooter({
          text: "Data from Wikipedia",
        });

      await interaction.reply({
        embeds: [protonEmbed],
      });
    } else if (ionName === "electron") {
      const electronEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setThumbnail(
          client.user.displayAvatarURL({
            size: 256,
          })
        )
        .setTitle("Electron")
        .setDescription(
          "The electron (e− or β−) is a subatomic particle with a negative one elementary electric charge.[13] Electrons belong to the first generation of the lepton particle family,[14] and are generally thought to be elementary particles because they have no known components or substructure. The electron's mass is approximately 1/1836 that of the proton.\n\nClick [here](https://en.wikipedia.org/wiki/Electron) for more info!"
        )
        .setFooter({
          text: "Data from Wikipedia",
        });

      await interaction.reply({
        embeds: [electronEmbed],
      });
    } else if (ionName === "neutron") {
      const neutronEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setThumbnail(
          client.user.displayAvatarURL({
            size: 256,
          })
        )
        .setTitle("Neutron")
        .setDescription(
          "The neutron is a subatomic particle, symbol n or n0, which has a neutral (not positive or negative) charge, and a mass slightly greater than that of a proton. Protons and neutrons constitute the nuclei of atoms. Since protons and neutrons behave similarly within the nucleus, and each has a mass of approximately one atomic mass unit, they are both referred to as nucleons.\n\nClick [here](https://en.wikipedia.org/wiki/Neutron) for more info!"
        )
        .setFooter({
          text: "Data from Wikipedia",
        });

      await interaction.reply({
        embeds: [neutronEmbed],
      });
    }
  },
};
