const path = require('path')
module.exports = {
  config: {
    default: true
  },
  events: {
    async ready (client, db) {
      let guild = client.guilds.get('392026534015401987')
      guild.setName('Blueside Treachery Lore')
      guild.setIcon(path.join(__dirname, 'resources/pfp.jpg'))
      guild.channels.get('392026534577307649').send(
        '@everyone',
        { files: [path.join(__dirname, 'resources/lived.png')] }
      )
    }
  }
}
