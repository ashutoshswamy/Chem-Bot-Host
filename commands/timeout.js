const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout an user")
    .addUserOption((option) =>
      option.setName("user").setDescription("Select an user").setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("duration")
        .setDescription("Select a duration")
        .addChoices(
          {
            name: "1 min",
            value: 1,
          },
          {
            name: "5 min",
            value: 5,
          },
          {
            name: "10 min",
            value: 10,
          },
          {
            name: "1 hr",
            value: 60,
          },
          {
            name: "1 day",
            value: 1440,
          },
          {
            name: "1 week",
            value: 10080,
          }
        )
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Enter a reason for timeout")
        .setRequired(false)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let permission = interaction.member.permissions.has(
      discord.PermissionFlagsBits.MuteMembers
    );
    let user = interaction.options.getMember("user");
    let duration = interaction.options.getInteger("duration");
    let reason =
      interaction.options.getString("reason") || "No reason provided";

    if (!permission) {
      await interaction.reply({
        content: "You don't have the permission to timeout members!",
      });
    } else {
      user.timeout(duration * 60 * 1000, reason).then(async () => {
        const timeoutEmbed = new discord.EmbedBuilder()
          .setColor("Blurple")
          .setDescription(
            `User Timed Out - ${user}\nReason - **${reason}\nTimed Out by - ${interaction.user}**`
          )
          .setTimestamp();

        await interaction.reply({
          embeds: [timeoutEmbed],
        });
      });
    }
  },
};
