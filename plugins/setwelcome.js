let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

