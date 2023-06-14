module.exports = [{
    name: "ping",
    info: {
        usage: "ping",
        aliases: ["none"],
        description: "Displays the bot's latency.",
        permissions: ["sendmessages", "viewchannel"],
        type: "text"
    },
    code: `
    $editIn[3s;My latency is currently: \`$ping MS\`]
    $reply
    Pong! 🏓`
}]