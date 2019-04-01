const path = require('path')
module.exports = {
  config: {
    default: true
  },
  events: {
    async ready (client, db) {
      let guild = client.guilds.get('392026534015401987')
      guild.channels.get('392026534577307649').send('You laugh, but that means you have to send a full fireteam just to try and get me.\nYoure all afraid')
    }
  }
}
