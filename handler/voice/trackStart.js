module.exports = [{
    name: "trackStart",
    type: "trackStart",
    channel: "$channelID",
    code: `
    $title[Now Playing $songInfo[title]]
    $thumbnail[$songInfo[thumbnail]]
    $color[$getVar[color]]`
}]

// Simple example of aoi.music callbacks also known as events.