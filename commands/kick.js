const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick an user from the server")
    .addUserOption((option) =>
      option.setName("user").setDescription("Select an user").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Enter a reason for kick")
        .setRequired(false)
    ),
  /**
   *
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let permission = interaction.member.permissions.has(
      discord.PermissionFlagsBits.KickMembers
    );
    let user = interaction.options.getMember("user");
    let reason =
      interaction.options.getString("reason") || "No reason provided";

    if (!permission) {
      await interaction.reply({
        content: "You don't have the permission to kick members!",
      });
    } else if (!user.kickable) {
      await interaction.reply({
        content: "You can't kick this member!",
      });
    } else {
      user.kick(reason).then(async () => {
        const kickEmbed = new discord.EmbedBuilder()
          .setColor("Blurple")
          .setDescription(
            `User kicked - ${user}\nReason - **${reason}**\nKicked by - ${interaction.user}`
          )
          .setTimestamp();

        await interaction.reply({
          embeds: [kickEmbed],
        });
      });
    }
  },
};
