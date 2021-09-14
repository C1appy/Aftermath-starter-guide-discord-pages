const Command = require("../Structures/Command.js");
const paginationEmbed = require('discordjs-button-pagination');
const { MessageEmbed, MessageButton} = require('discord.js');

module.exports = new Command({
	name: "starter",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String} args
     */
	async run(message, args, client) {
        const embed1 = new MessageEmbed()
        .setTitle('Where is my menu?')
        .setColor('#2ebf81')
        .setDescription(`
        - "M" or "," depending on your keyboard layout, you can rebind them in your keybind settings\n
        To rebind them press esc go to settings then look for **Key bindings** Fivem tab then rebind the one labled UG-MENU`)
        .setImage('https://cdn.discordapp.com/attachments/850586881955856414/886778349983264838/unknown.png')
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)
        
        const embed2 = new MessageEmbed()
        .setTitle('What car do I start with?')
        .setColor('#2ebf81')
        .setDescription('Every player will start with 50k from there i would reccomend you head to simeon to purchase a Peugot 406 taxi as it is the best starter car going.')
        .setImage('https://media.discordapp.net/attachments/850586881955856414/886779639463284796/HELP_STARTER.png')
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)

        const embed3 = new MessageEmbed()
        .setTitle('What do I do here?')
        .setColor('#2ebf81')
        .setDescription(`Suffer until level 10 and buy repo gear, don't bother upgrading your car until then, The best races to start off doing are highway drag which is located next to the casino on the highway`)
        .setImage('https://cdn.discordapp.com/attachments/850586881955856414/886780338574082108/unknown.png')
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)

        const embed4 = new MessageEmbed()
        .setTitle('What do I do next?')
        .setColor('#2ebf81')
        .setDescription(`Balance your grind between repos and races, fit a heist or two every night.\n
        Heist levels and time are as follow\n
        Level 10 is Blain county located at the top of the map starts at 00:00 in game time ends at 4:00 am\n
        Level 25 is Pacific bank heist located on Vinewood Boulevard starts at 00:00 in game time ends at 3:00 am\n
        Level 35 Humane labs at Humane Labs starts at 00:00 in game time ends at 2:00 am\n
        Level 50 Express heist located at the docks starts at 00:00 in game time ends at 2:00 am `)
        .setImage('https://cdn.discordapp.com/attachments/850586881955856414/886802157788078120/HEIST_PICS.png')
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)

        const embed5 = new MessageEmbed()
        .setTitle(`How do I spawn a car?`)
        .setColor(`#2ebf81`)
        .setDescription(`Open your menu and press Personal Garage, then spawn the car of your choice your menu should look similiar to this`)
        .setImage('https://media.discordapp.net/attachments/850586881955856414/886805076394528788/garage.png')
        .setThumbnail('https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096')

        const embed6 = new MessageEmbed()
        .setTitle(`How do i rice and tune my car?`)
        .setColor('#2ebf81')
        .setDescription(`You can apply normal gta online upgrades to a vehicle frm Los Santon customs like you would in gta online.\n
        There is also Racers Edge near mirror park where you can tune your vehicle from new tyres to twin turbski's to gap some civic's`)
        .setImage('https://cdn.discordapp.com/attachments/850586881955856414/886806300485386350/custom.png')
        .setThumbnail('https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096')

        const embed7 = new MessageEmbed()
        .setTitle(`How do i transfer my vehicle to someone?`)
        .setColor('#2ebf81')
        .setDescription(`To transfer your vehicle to a player type  /transfervehicle [ID] [PLATE] to find the ID of the user press page up and look for their id`)
        .setImage('https://media.discordapp.net/attachments/850586881955856414/886808236664172576/transfer.png')
        .setThumbnail('https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096')

        const embed8 = new MessageEmbed()
        .setTitle('What are coins for?')
        .setColor('#2ebf81')
        .setDescription(`Temporary perks that increase your money or xp income, look for the coin shop on your map`)
        .setImage('https://cdn.discordapp.com/attachments/850586881955856414/886809282211876864/coin_shop.png')
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)

        const embed9 = new MessageEmbed()
        .setTitle('How do I lock my car?')
        .setColor('#2ebf81')
        .setDescription(`Press Z, select Keyfob near your car`)
        .setImage('https://media.discordapp.net/attachments/850586881955856414/886810713895604264/unknown.png')
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)

        const embed10 = new MessageEmbed()
        .setTitle('My car broke down what do i do?')
        .setColor('#2ebf81')
        .setDescription(`Open your menu and call roadside assistance you will be charged $1000 for the repair but he does give you 80 fuel or if you head to a store you can purchase engine repair kits`)
        .setImage('https://cdn.discordapp.com/attachments/850586881955856414/886811305560911952/unknown.png')
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)

        const embed11 = new MessageEmbed()
        .setTitle('What do I need for repos?')
        .setColor('#2ebf81')
        .setDescription(`Loads of wirestrippers (max is 20).

         One of three lockpicks (electric one is best).

         An OBD scanner (cheap one works fine).

         A RF-Meter. 

         And a code grabber.
         
         NOTE: not all repos require a code grabber and an rf meter.
         `)
        .setImage('https://cdn.discordapp.com/attachments/850586881955856414/886813363647152208/repo_gear.png')
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)

        const embed12 = new MessageEmbed()
        .setTitle('How do I start a repo mission?')
        .setColor('#2ebf81')
        .setDescription(`Open your menu and press Start Repossession Mission`)
        .setImage('https://cdn.discordapp.com/attachments/850586881955856414/886814808895279114/repo_start.png')
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)

        const embed13 = new MessageEmbed()
        .setTitle('Common questions')
        .setColor('#2ebf81')
        .setDescription(`
        **Where do vStancer be?**
        - F5
        
        **Vehicle extras and liveries?**
        - F9 and F10
        
        **Can I buy ingame money and get a Gemera?**
        - No`)
        .setThumbnail(`https://cdn.discordapp.com/icons/860493146525401118/2ac1ea32d1fcafadf6e76ef1112efc42.png?size=4096`)

        const button1 = new MessageButton()
              .setCustomId("previousbtn")
              .setEmoji("885650314575896616")
              .setStyle("SECONDARY");
        
        const button2 = new MessageButton()
              .setCustomId("nextbtn")
              .setEmoji('885650294401277962')
              .setStyle("SECONDARY");
        const pages = [
              embed1,
              embed2,
              embed3,
              embed4,
              embed5,
              embed6,
              embed7,
              embed8,
              embed9,
              embed10,
              embed11,
              embed12,
              embed13,
              //....
              //embedN (till the number of your embeds)
            ];
            //create an array of buttons
        
        const buttonList = [button1, button2];
        const timeout = 30000;
        paginationEmbed(message, pages, buttonList, timeout);
	}
});