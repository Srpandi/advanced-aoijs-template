module.exports = [{
    name: "eval",
    aliases: "ev",
    info: {
        usage: "eval",
        aliases: ["ev"],
        description: "Evaluates given aoi.js code.",
        permissions: ["sendmessages", "viewchannel"],
        type: "text"
    },
    code: `
\`\`\`
$eval[$message;true;true;true;true]
\`\`\`
$onlyIf[$checkContains[$clientOwnerIDs[, ];$authorID]==true;You're not my developer!]`
}]