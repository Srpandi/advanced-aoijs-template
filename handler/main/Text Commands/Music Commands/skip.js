module.exports = [{
    name: "skip",
    info: {
        usage: "skip",
        description: "Skip the current song.",
        aliases: ["s"],
        type: "text",
        permissions: ["sendmessages", "viewchannel", "embedlinks"]
    },
    code: `
    $skipTrack
    $reply
    Skipped the current song.

    $onlyIf[$voiceID[$authorID]!=||$voiceID[$clientID]==$voiceID[$authorID];You're not connected to any Voice Channel.]
    $onlyIf[$playerStatus==playing;You can't skip something when I'm not even playing anything.]`
}]