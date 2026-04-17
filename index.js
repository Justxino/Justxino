const {
  Client,
  GatewayIntentBits,
  EmbedBuilder
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`${client.user.tag} is online`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'store') {
    const embed = new EmbedBuilder()
      .setColor('#7d3cff')
      .setTitle('Poz RZ Store Prices')
      .setDescription(`
**Coins Guns ➜ $20-$30**
**Clothing Import ➜ $25**
**Gun Import ➜ $30**
**Tx Unban ➜ $10**
**Ac Unban ➜ $25**
**Personal Drug ➜ $35**
**Coins ➜ Every 10 Diamonds is $1**
      `)
      .setFooter({ text: 'Poz RZ' });

    await interaction.reply({ embeds: [embed] });
  }

  if (interaction.commandName === 'help') {
    await interaction.reply('Commands: /store /help');
  }
});

client.login(process.env.TOKEN);
