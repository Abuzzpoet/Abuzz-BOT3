let handler = function (m) {
  // this.sendContact(m.chat, '6289636827082', 'Abuzzpoet', m)
  this.sendContact(m.chat, '6289636827082', 'Abuzzpoet', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
