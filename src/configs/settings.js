/**
 * Client Settings
 * @param { Client } client 
 */

 module.exports = (client) => {

    //General Settings
    client.settings = {

        Prefix: ".",
        Token: "OTYxOTE1NjM0NjkyODAwNTU0.Yk_7vg.YkZGqpFhNItuBPkg4dONrySEI-4",
        Owners: ["482541644944506880"],
        OtherBots: [""],
        VoiceChannel: "914896420056727562",
        Activity: "PLAYING",
        Status: "idle",
        MongoURL: "mongodb+srv://luxer:nercan1973@cluster0.03cnz.mongodb.net/BichMod?retryWrites=true&w=majority",
        Footer: "Luxer ❤️ 828",
        DisableCooldownsForAdmins: true,

    };

    //Activity Messages
    client.statusMessages = [

        "Luxer ❤️ 828",
        "828 ❤️ Luxer"

    ];

    //Emojis
    client.systemEmojis = [

        ///System
        { emojiName: 'developer', emojiUrl: 'https://cdn.discordapp.com/emojis/853642013332865035.gif?v=1' },
        { emojiName: 'loading', emojiUrl: 'https://cdn.discordapp.com/emojis/857935194203226118.gif?v=1' },
        { emojiName: 'arrow', emojiUrl: 'https://cdn.discordapp.com/emojis/821298641863442442.gif?v=1' },
        { emojiName: 'crown', emojiUrl: 'https://cdn.discordapp.com/emojis/876942324909871114.gif?v=1' },
        { emojiName: 'crown2', emojiUrl: 'https://cdn.discordapp.com/emojis/876929331572662323.gif?v=1' },
        { emojiName: 'mark', emojiUrl: 'https://cdn.discordapp.com/emojis/876153262796079115.gif?v=1' },
        { emojiName: 'mark2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641429146140684.png?v=1' },
        { emojiName: 'cross', emojiUrl: 'https://cdn.discordapp.com/emojis/876153078863253514.gif?v=1' },
        { emojiName: 'cross2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641452227264522.png?v=1' },
        { emojiName: 'success', emojiUrl: 'https://cdn.discordapp.com/emojis/793774156067373066.gif?v=1' },

        ///Status
        { emojiName: 'online', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950275698692.png?v=1' },
        { emojiName: 'dnd', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950355390545.png?v=1' },
        { emojiName: 'idle', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950069915667.png?v=1' },
        { emojiName: 'offline', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950686609420.png?v=1' },
        { emojiName: 'web', emojiUrl: 'https://cdn.discordapp.com/emojis/825429354707288065.png?v=1' },

        ///Penal
        { emojiName: 'banned', emojiUrl: 'https://cdn.discordapp.com/emojis/748618263071555645.gif?v=1' },
        { emojiName: 'jailed', emojiUrl: 'https://cdn.discordapp.com/emojis/878303820181024788.png?v=1' },
        { emojiName: 'chatMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/878303318743609384.png?v=1' },
        { emojiName: 'warned', emojiUrl: 'https://cdn.discordapp.com/emojis/826369282942042112.png?v=1' },

        ///Voice
        { emojiName: 'joined', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545977794560.gif?v=1' },   
        { emojiName: 'leaved', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545168293968.gif?v=1' },
        { emojiName: 'unMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450633564271.png?v=1' },
        { emojiName: 'muted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710451086524416.png?v=1' },
        { emojiName: 'unDeafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450243502091.png?v=1' },
        { emojiName: 'deafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450138619915.png?v=1' },
        { emojiName: 'camera', emojiUrl: 'https://cdn.discordapp.com/emojis/839043294717542400.png?v=1' }

    ];

    //Guild Settings     
    client.guildSettings = {

        ///General
        guildID: "914441208611364884",
        guildTags: ["."],
        guildDiscriminator: "100",
        guildTeams: [],
        meetRole: "",
        meetChannel: "",
        nameTag: "✧",
        dmMessages: true,
        unAuthorizedMessages: true,

        ///Staffs
        staffRoles: ["914896279887290378"],
        transporterSpears: ["914896279887290378"],
        registerSpears: ["914896279887290378"],
        staffGiver: "914896279887290378",
        botYt: "914864658287059024",

        ///Penals
        penals: {

            ///Ban
            ban: {
                staffs: ["914896279887290378"],
                penalPoint: 40,
                penalLimit: 3,
                log: "931988778019586109",
                banGifs: ['https://media1.tenor.com/images/ed33599ac8db8867ee23bae29b20b0ec/tenor.gif?itemid=14760307', 'https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif', 'https://media1.tenor.com/images/4732faf454006e370fa9ec6e53dbf040/tenor.gif?itemid=14678194'],
                unbanGifs: ['https://data.whicdn.com/images/192611812/original.gif'],
            },

            ///Jail
            jail: {
                staffs: ["914896279887290378"],
                jailRoles: ["914896318403604511"],
                jailChannel: "914896397667561534",
                penalPoint: 30,
                penalLimit: 5,
                log: "914896397667561534",
            },

            ///Chat Mute
            chatMute: {
                staffs: ["914896279887290378"],
                cmuteRoles: ["914896318403604511"],
                penalPoint: 20,
                penalLimit: 5,
                log: "914896397667561534",
            },

            ///Voice Mute
            voiceMute: {
                staffs: ["914896279887290378"],
                vmuteRoles: ["914896318403604511"],
                penalPoint: 20,
                penalLimit: 5,
                log: "914896397667561534",
            },

            ///Warn
            warn: {
                staffs: ["914896279887290378"],
                warnRoles: [{
                    warnCount: 1,
                    warnRole: "914896318403604511", 
                }, {
                    warnCount: 2,
                    warnRole: "914896318403604511",
                }, {
                    warnCount: 3,
                    warnRole: "914896318403604511",
                }],
                penalPoint: 10,
                log: "914896397667561534",
            },

        },

        ///Registration
        registration: {
            unregisterName: "",
            unregisterRoles: ["914896318403604511"],
            unregisterChannel: "914896397667561534",
            quarantineRole: "914896318403604511",
            familyRole: "931694386943782944",
        },

        ///Forbidden Tag
        forbiddenTag: {
            forbidRoles: ["914896318403604511"],
            forbidChannel: "914896397667561534",
            forbidLog: "914896397667561534",
        },

        ///Logs
        logs: {
            pointLog: "914896397667561534",
            voiceLog: "914896397667561534",
            messageLog: "914896397667561534",
            securityLog: "914896397667561534",
        },

    };

};