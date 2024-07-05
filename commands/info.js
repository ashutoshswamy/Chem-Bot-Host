const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("info")
    .setDescription("Get some info about me"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    const infoEmbed = new discord.EmbedBuilder()
      .setColor("Blurple")
      .setThumbnail(
        client.user.displayAvatarURL({
          size: 512,
        })
      )
      .setTitle("Chem Bot")
      .setDescription(
        "**Chem Bot** is a bot which gives you information on basic concepts of **Chemistry** and also has some **Moderation** commands to keep the server under control. It also has **Fun** commands which will entertain people."
      )
      .addFields(
        {
          name: "Prefix",
          value: "Slash commands (/)",
          inline: false,
        },
        {
          name: "My Usertag",
          value: `${client.user.tag}`,
          inline: false,
        },
        {
          name: "My Developer",
          value: "<@787019465568419871>",
          inline: false,
        },
        {
          name: "Developed on",
          value: "December 13, 2020",
          inline: false,
        }
      )
      .setFooter({
        text: "Invite me to your server by using /invite command",
      });

    await interaction.reply({
      embeds: [infoEmbed],
    });
  },
};
