let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [089636827082]
│ • Telkomsel [082171978174]
│ • Gopay [089636827082]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6289636827082
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa Gopay"
3.)Dan terus masukkan nomor kami 089636827082
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
