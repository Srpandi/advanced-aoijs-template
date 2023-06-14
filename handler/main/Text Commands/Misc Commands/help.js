module.exports = [{
    name: "help",
    aliases: "command",
    info: {
        usage: "help <command>",
        description: "Displays information about a given command or the list of commands.",
        aliases: ["command"],
        type: "text",
        permissions: ["sendmessages", "viewchannel", "embedlinks"]
    },
    $if: "old",
    code: `
    $if[$checkCondition[$message==||$commandInfo[$message;name]==||$commandInfo[$message;info]==||$commandInfo[$message;name]==undefined]==true]
    $thumbnail[$replaceText[$replaceText[$checkCondition[$guildIcon==];true;$userAvatar[$clientID]];false;$guildIcon]]
    $title[Command List]
    $color[$getVar[color]]
    $addTimeStamp
    $addField[Regular Commands;
        \`$djsEval[client.cmd.default.map(x => x.name).join("\`, \`");true]\`
    ]
    $if[$djsEval[client.cmd.interaction.slash.map(x => x.name).join("\`, /\`");true]!=]
    $addField[Interaction Commands;
        \`$djsEval[client.cmd.interaction.slash.map(x => x.name).join("\`, /\`");true]\`
    ]
    $endif

    $elseif[$checkCondition[$commandInfo[$message;name]!=||$commandInfo[$message;name]!=undefined||$commandInfo[$message;name]!=]==true]

    $title[$replaceText[$replaceText[$checkCondition[$commandInfo[$message;info.type]==interaction];true;/];false;]$commandInfo[$message;info.usage]]
    $thumbnail[$replaceText[$replaceText[$checkCondition[$guildIcon==];true;$userAvatar[$clientID]];false;$guildIcon]]
    $description[$commandInfo[$message;info.description]]
    $addField[Permissions Needed;$commandInfo[$message;info.permissions]]
    $addField[Aliases;$commandInfo[$message;info.aliases]]
    $footer[Type: $toLocaleUpperCase[$commandInfo[$message;info.type]]]
    $color[$getVar[color]]
    $endelseif
    $endif
    `
}]