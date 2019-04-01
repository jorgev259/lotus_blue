const path = require('path')
module.exports = {
  config: {
    default: true
  },
  events: {
    async ready (client, db) {
      let guild = client.guilds.get('392026534015401987')
      guild.channels.get('392026534577307649').send('Anarchy was never good to begin with, and its nothing against my functional Midnight Special')
    }
  }
}
