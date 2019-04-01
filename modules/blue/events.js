const path = require('path')
module.exports = {
  config: {
    default: true
  },
  events: {
    async ready (client, db) {
      let guild = client.guilds.get('392026534015401987')
      client.user.setAvatar(path.join(__dirname, 'resources/pfp.jpg'))
      guild.me.setNickname('Blue Joker')
      guild.channels.get('392026534577307649').send('I claim this server as mine')
    }
  }
}
