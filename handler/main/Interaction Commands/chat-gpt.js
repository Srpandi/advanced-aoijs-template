module.exports = [{
    name: "ask-gpt",
    prototype: "slash",
    type: "interaction",
    info: {
        usage: "ask-gpt",
        aliases: ["none"],
        description: "Displays the bot's latency.",
        permissions: ["sendmessages", "viewchannel"],
        type: "interaction"
    },
    code: `
    $interactionFollowUp[$get[response]]
  $let[response;$djsEval[const axios = require("axios");
  (async () => { 
    try {
      const response = await axios.post('https://api.pawan.krd/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        max_tokens: 250,
        messages: [
          { role: 'system', content: '$get[prompt]' },
          { role: 'user', content: '$slashOption[question]' }
        ]
      }, {
        headers: {
          'Authorization': 'Bearer $get[apiKey]',
          'Content-Type': 'application/json'
        }
      });
      return response.data.choices[0].message.content
    } catch (err) {
      console.log(err)
      return "Something went horribly wrong, please try later again."
    }
  })();true]
  $interactionDefer
  
  $suppressErrors[Something went wrong.]
  $onlyIf[$stringStartsWith[$get[apiKey];pk-]==true;Hmm, seems like you provided some kind of invalid API key, double check your key and try again. {extraOptions:{interaction: true}} {options:{ephemeral: true}}]
  $let[prompt;You are a helpful assistant.]
  $let[apiKey;$djsEval[$getVar[apiKey];true]]`
  }]

/* To use this command execute this with the eval command:

This will create an application command to make the command useable!

$createApplicationCommand[global;ask-gpt;Ask Chat-GPT a question!;true;slash;[{
    "name": "question",
    "description": "The question you'd like to ask.",
    "required": true,
    "type": 3 
}]]

*/