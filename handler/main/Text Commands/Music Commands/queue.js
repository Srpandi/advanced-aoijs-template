module.exports = [{
    name: "queue",
    info: {
        usage: "queue",
        aliases: ["list"],
        description: "Displays the queued songs, if any.",
        permissions: ["sendmessages", "viewchannel", "embedlinks"],
        type: "text"
    },
    code: `
    $title[Current Queue]
    $color[$getVar[color]]
    $footer[$queueLength]
    $description[$replaceText[$queue[1;10;- \`{title}\` | <@{requester.user.id}>];,-;\n-]
    $onlyIf[$queueLength!=0;There's nothing to show, add songs using $getGuildVar[prefix]play]`
}]