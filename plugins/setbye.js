let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

