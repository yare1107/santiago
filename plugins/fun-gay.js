let handler = async (m, { groupMetadata }) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   let nro = (100).getRandom()
   await m.reply(`@${who.split("@")[0]} es ${nro}% Gay 🏳️‍🌈.`, null, { mentions: [who] })
}

handler.help = ['gay2']
handler.tags = ['fun']
handler.command = ['cekgay', 'gay2']

handler.group = true

export default handler
