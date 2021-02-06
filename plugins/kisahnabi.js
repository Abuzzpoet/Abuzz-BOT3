let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
KISAH PARA NABI:
Via Wikipedia {SEBARKAN}

*Instagram:
_~rajifarmansyah_

1. Nabi Adam As ⇨ https://id.m.wikipedia.org/wiki/Adam
2. Nabi Idris As ⇨ https://id.m.wikipedia.org/wiki/Idris
3. Nabi Nuh As ⇨ https://id.m.wikipedia.org/wiki/Nuh
4. Nabi Hud As ⇨ https://id.m.wikipedia.org/wiki/Hud
5. Nabi Shaleh As ⇨ https://id.m.wikipedia.org/wiki/Shaleh
6. Nabi Ibrahim As ⇨ https://id.m.wikipedia.org/wiki/Ibrahim
7. Nabi Luth As ⇨ https://id.m.wikipedia.org/wiki/Luth
8. Nabi Ismail As ⇨ https://id.m.wikipedia.org/wiki/Ismail
9. Nabi Ishaq As ⇨ https://id.m.wikipedia.org/wiki/Ishaq
10. Nabi Yaqub As ⇨ https://id.m.wikipedia.org/wiki/Yaqub
11. Nabi Yusuf As ⇨ https://id.m.wikipedia.org/wiki/Yusuf
12. Nabi Ayub As ⇨ https://id.m.wikipedia.org/wiki/Ayub
13. Nabi Syuib As ⇨ https://id.m.wikipedia.org/wiki/Syuib
14. Nabi Musa As ⇨ https://id.m.wikipedia.org/wiki/Musa
15. Nabi Harun As ⇨ https://id.m.wikipedia.org/wiki/Harun
16. Nabi Zulkifli As ⇨ https://id.m.wikipedia.org/wiki/Zulkifli
17. Nabi Daud As ⇨ https://id.m.wikipedia.org/wiki/Daud
18. Nabi Sulaiman As ⇨ https://id.m.wikipedia.org/wiki/Sulaiman
19. Nabi Ilyas As ⇨ https://id.m.wikipedia.org/wiki/Ilyas
20. Nabi Ilyasa As ⇨ https://id.m.wikipedia.org/wiki/Ilyasa
21. Nabi Yunus As ⇨ https://id.m.wikipedia.org/wiki/Yunus
22. Nabi Zakaria As ⇨ https://id.m.wikipedia.org/wiki/Zakaria
23. Nabi Yahya As ⇨ https://id.m.wikipedia.org/wiki/Yahya
24. Nabi Isa As ⇨ https://id.m.wikipedia.org/wiki/Isa
25. Nabi Muhammad Saw ⇨ https://id.m.wikipedia.org/wiki/Muhammad
`.trim(), m)
}
handler.help = ['kisahnabi']
handler.tags = ['quotes']
handler.command = /^(kisahnabi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

