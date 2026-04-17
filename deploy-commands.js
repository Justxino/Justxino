const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('store')
    .setDescription('Show Poz RZ prices'),

  new SlashCommandBuilder()
    .setName('help')
    .setDescription('Show commands')
].map(c => c.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Deploying commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.SERVER_ID
      ),
      { body: commands }
    );

    console.log("Slash commands registered successfully!");
  } catch (err) {
    console.error("ERROR:", err);
  }
})();
