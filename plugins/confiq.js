let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

_HP ADA LAG/PATAH PATAH PAKE INI CONFIQ AMAN NO BAND_
https://www.mediafire.com/file/r50zxp845jxv7wi/V1.59.7_Config_Fix_Lag.7z/file

CARA PEMASANGAN!

1. BUKA ZARCKIVER/FILE MANAGER
2. PILIH FOLDER DOWNLOAD
3. CARI FILE V1.59.7 [ SESUAI HP ] Config Fix Lag.zip
4. EKSTRAK DISINI
5. TUNGGU SAMPAI SELESAI
6. HAPUS DULU FOLDER Compulsory
7. CARA HAPUS YA Android/data/com.dts.freefireth/files/contentcache
8. TRUSS HAPUS FOLDER Compulsory
9. BUKA FOLDER Config Fix Lag Free Fire V1.59.7 #6
10. TAHAN
11. POTONG/SALIN
12. BUKA FOLDER Android/data/com.dts.freefireth/files/contentcache
13. TRUSS TEMPEL
14. JANGAN LUPA MULAI ULANG/RELOAD BIAR CONFIQ YA BEKERJA DENGAN BAIK/SEMPURNA TUNGGU 5 MENIT
15. SELAMAT BERMAIN

KALAU MAU LIAT TUTORIAL YA DI Mars Company BIAR JELAS
LINK: https://youtu.be/2tYCHIXQI6c
_BY Mars Company_!
`.trim(), m)
}
handler.help = ['confiq']
handler.tags = ['confiq']
handler.command = /^(confiq)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
