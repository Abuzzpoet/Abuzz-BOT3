let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Abuzzpoet
Script: @Nurotomo,Drawl Nag
Github:
https://github.com/Abuzzpoet/Abuzz-BOT3

*Sosmed :*
Kritik kami di sosmed.
Instagram: @rajifarmansyah
➥ YouTube tutorial:
youtube.com/DrawlNag

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╭────「 DONASI 」
├ ◩ Tri: 0896-3682-7082
├ ◩ Tsel: 0821-7197-8174
├ ◩ Gopay: 0896-3682-7082
├ >Request? Wa.me/6289636827082
╰──────────────────────
BY DRAWL NAG!
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

