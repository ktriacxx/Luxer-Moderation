const { Footer } = global.client.settings;
const { guildTags, guildDiscriminator } = global.client.guildSettings;
const { crown } = require('../../configs/emojis.json');

module.exports = {
    name: 'say',
    aliases: ['üyesay'],
    category: 'Admin',
    usage: '',
    permission: 'ADMINISTRATOR',
    guildOnly: true,
    cooldown: 5,

    /**
     * @param { Client } client 
     * @param { Message } message 
     * @param { Array<String> } args 
     * @param { MessageEmbed } Embed 
     */

    execute(client, message, args, Embed) {

        let totalMembers = message.guild.memberCount;
        let onlineMembers = message.guild.members.cache.filter(member => member.presence.status !== "offline").size.toString().replace(/ /g, " ");
        const tag = message.guild.members.cache.filter(m => m.user.username.includes("Wei")).size;
        const tag2 = message.guild.members.cache.filter(m => m.user.username.includes("wei")).size;
        const etiket = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "0828").size;
        tagtotal = etiket+tag+tag2; 
        let voiceMembers = message.guild.members.cache.filter(member => member.voice.channel && !member.user.bot).size.toString();
        let botMembers = message.guild.members.cache.filter(member => member.user.bot && member.voice.channel).size.toString();
        let boostSize = message.guild.premiumSubscriptionCount;
        let boostLevel = message.guild.premiumTier;

        message.channel.success(message, Embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true })).setTitle(`${message.guild.name} Bilgileri :`).setThumbnail(message.guild.iconURL({ dynamic: true })).setFooter(`${Footer} 
    ${message.author.username} tarafından istendi`).setDescription(`
  \`⦁\` Sunucuda Toplam **${totalMembers}** kullanıcı bulunmakta. (**${onlineMembers}** aktif.)
  \`⦁\` Sunucudaki Ses Kanallarında **${voiceMembers}** ( **+${botMembers}** Bot ) Üye Var.
  \`⦁\` Sunucuda Toplam **${tagtotal}** Taglı Üye Var.
  \`⦁\` Sunucuda Toplam **${boostSize}** ${!boostLevel || boostLevel == 0 ? `` : `( **${boostLevel}.** Seviye )`} Boost Var.
        `), { react: true });

    },
};