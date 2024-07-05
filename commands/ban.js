const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban an user from the server")
    .addUserOption((option) =>
      option.setName("user").setDescription("Select an user").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Enter a reason for ban")
        .setRequired(false)
    ),
  /**
   *
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let permission = interaction.member.permissions.has(
      discord.PermissionFlagsBits.BanMembers
    );
    let user = interaction.options.getMember("user");
    let reason =
      interaction.options.getString("reason") || "No reason provided";

    if (!permission) {
      await interaction.reply({
        content: "You don't have the permission to ban members!",
      });
    } else if (!user.bannable) {
      await interaction.reply({
        content: "You can't ban this member!",
      });
    } else {
      user
        .ban({
          reason: reason,
        })
        .then(async () => {
          const banEmbed = new discord.EmbedBuilder()
            .setColor("Blurple")
            .setDescription(
              `User banned - ${user}\nReason - **${reason}**\nBanned by - ${interaction.user}`
            )
            .setTimestamp();

          await interaction.reply({
            embeds: [banEmbed],
          });
        });
    }
  },
};
