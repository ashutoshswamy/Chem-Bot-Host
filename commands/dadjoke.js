const discord = require("discord.js");
const djokes = require("discord-jokes");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("dadjoke")
    .setDescription("Get a random dad joke"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    djokes.getRandomDadJoke(async function (joke) {
      const dadjokeEmbed = new discord.EmbedBuilder()
        .setColor("Blurple")
        .setTitle(`Dad Joke for ${interaction.user.username}`)
        .setDescription(`**${joke}**`)
        .setFooter({
          text: "Source: Random Dad",
        });

      await interaction.reply({
        embeds: [dadjokeEmbed],
      });
    });
  },
};
