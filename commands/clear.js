const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("clear")
    .setDescription("Clear all the spam/unnecessary messages in one go")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("Select a channel")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription(
          "Enter the amount of messages you want to delete (1-200)"
        )
        .setMinValue(1)
        .setMaxValue(200)
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let permission = interaction.member.permissions.has(
      discord.PermissionFlagsBits.ManageMessages
    );
    let channel = interaction.options.getChannel("channel");
    let amount = interaction.options.getInteger("amount");

    if (!permission) {
      await interaction.reply({
        content: "You don't have the permission to manage messages!",
      });
    } else {
      channel.bulkDelete(amount).then(async () => {
        const clearEmbed = new discord.EmbedBuilder()
          .setColor("Blurple")
          .setDescription(
            `${interaction.user} has deleted **${amount}** messages in ${channel}`
          )
          .setTimestamp();

        await interaction.reply({
          embeds: [clearEmbed],
        });
      });
    }
  },
};
