let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Syarat dan Ketentuan Abuzz bot
 1. Data anda akan di hapus ketika bot Offline
  2. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
   3. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
    4. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot atau ketik #owner
     5. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Sudah faham dengan rules nya ? jika sudah silahkan lanjut dengan ketik #menu

By Drawl Nag!
@2021 Abuzz-BOT
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

