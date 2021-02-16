let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

Hallo gays
Yang baru join/members baru
Intro dlu ngab!
╭───➤🄸🄽🅃🅁🄾⫸
├☞ _NAMA_:
├☞ _ASAL_:
├☞ _UMUR_:
├☞ _KELAS_:
├☞ _JENIS KELAMIN_:
`.trim(), m)
}
handler.help = ['intro']
handler.tags = ['group']
handler.command = /^(intro)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
