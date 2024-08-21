const baileys = require('@whiskeysockets/baileys')
 const moment = require('moment-timezone') 
 const gradient = require('gradient-string') 
 const fetch = require('node-fetch') 
 const axios = require('axios')
 const cheerio = require('cheerio')
 const Jimp = require('jimp')
 const os = require('os')
 const chalk = require('chalk')
 const fs = require("fs")
 const ws = require('ws')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js')
let panel = "https://panel.infinitywa-host.com"

async function info(command, conn, m, speed, sender, fkontak, pickRandom, pushname, from, msg, text) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
let usuario = global.db.data.users[m.sender]
if (command == 'estado' || command == 'infobot') {
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]
let me = m.sender
var timestamp = speed();  
var latensi = speed() - timestamp  
const user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let stateRun = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *${lenguaje.info.text}*
┊┃━━━━━━━━━━━━━━•
┊┃ ✨ ${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 
┊┃
┊┃ ${lenguaje.info.text2} ${usedMemory} GB / ${totalMemory} GB
┊┃ ${lenguaje.info.text3} ${os.platform()}
┊┃ ${lenguaje.info.text4} ${os.hostname()}
┊┃ ${lenguaje.info.text5} ${cpuUsage.toFixed(2)}%
┊┃ ${lenguaje.info.text6} ${totalMemory} GB
┊┃━━━━━━━━━━━━━━•
┊┃ ${lenguaje.info.text7} ${Object.keys(global.db.data.users).length}
┊┃➢ 𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
┊┃➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
┊┃ ${lenguaje.info.text8} ${runtime(process.uptime())} 
┊┃ ${lenguaje.info.text9} ${conn.public ? 'Público' : `Privado`}
┊┃ ${lenguaje.info.text10} ${user.length}
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩\n`.trim() //`
let ments = [me]      
conn.sendButton(m.chat, stateRun, `${conn.user.id == global.numBot2 ? '' : `\n\n${lenguaje.info.text11} wa.me/${global.numBot.split`@`[0]}`}`, pickRandom([img, img1, img2]), [['𝐌𝐄𝐍𝐔', `.help`], ['𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃', `.ping`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], fkontak) 
//conn.sendMessage(m.chat, {image: imagen1, caption: stateRun, contextInfo:{ mentionedJid:[sender]}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'owner' || command == 'creador' || command == 'contacto') {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;PROPIETARIO/OWNER DEL BOT 👑;;;\nFN:OWNER\nORG:PROPIETARIO/OWNER DEL BOT 👑\nTITLE:\nitem1.TEL;waid=573147616444:+57 314 7616444\nitem1.X-ABLabel:PROPIETARIO/OWNER DEL BOT👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:PROPIETARIO/OWNER DEL BOT 👑\nEND:VCARD`
let a = await conn.sendMessage(m.chat, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: m})
await conn.sendButton(m.chat, `${lenguaje['smsWel']()} @${sender.split("@")[0]}, ${lenguaje.info.text12}\n`, botname, pickRandom([img, img1, img2]), [['𝐌𝐄𝐍𝐔', `.menu`], ['𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃', '.ping']], null, [['𝐆𝐈𝐓𝐇𝐔𝐁', `${md}`], ['𝐘𝐎𝐔𝐓𝐔𝐁𝐄', `${yt}`], ['𝐆𝐑𝐔𝐏𝐎𝐒', `${nn}`], ['𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀', `${fb}`]], a)
//conn.sendMessage(m.chat, { text : `${lenguaje['smsWel']()} @${sender.split("@")[0]}, ${lenguaje.info.text12}\n\n${fb}`, mentions: [sender]}, { quoted: a, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'grupos' || command == 'grupoficiales') {
//const grupp = Math.floor(Math.random() * 70);
let a = `${pickRandom([nn, nn2, nn3, nn4, nn5, nn6, nna, nn7, nn8, multi])}`
let imagen = `${pickRandom([imagen1, imagen2, imagen3])}`
conn.sendMessage(m.chat, { text: `${lenguaje.info.text13}\n1) ${nn}\n2) ${nn2}\n\n${lenguaje.info.text14}\n• ${nn3}\n\n• ${nn4}\n\n• ${nn5}\n\n• ${multi}\n\n${lenguaje.info.text15}\n• ${nn6}\n\n${lenguaje.info.text16}\n• ${nna}\n\n${lenguaje.info.text17}\n• ${nn7}\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n${lenguaje.info.text18}\n\n*⇶⃤꙰𝑬𝒏𝒍𝒂𝒄𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕ꦿ⃟⃢*\n${nn8}\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n${lenguaje.info.text19}`, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: a}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'instalarbot' || command == 'crearbot') {
conn.sendMessage(m.chat, { text: lenguaje.info.text20(fb, md),
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363301598733462@newsletter', 
serverMessageId: '', 
newsletterName: 'CorinPlus-Host ☁️' },
mentions: [sender], 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐂O𝐑𝐈𝐍𝐏𝐋𝐔𝐒-𝐇𝐎𝐒𝐓 🤖`,
body: `¡El plus que necesitas!`,
"previewType": "PHOTO",
"thumbnailUrl": `https://telegra.ph/file/551d3d544d7bc607fd337.jpg`,
"thumbnail": ``, 
"sourceUrl": yt}}},
{ quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'ping') {
var timestamp = speed();  
var latensi = speed() - timestamp
conn.sendMessage(from, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'report') {
if (!text) return m.reply(`${lenguaje.info.text21}\n${prefix + command} sticker no funciona`)
conn.sendMessage(`573026191480@s.whatsapp.net`, {text: `╭━━〔 *𝚁𝙴𝙿𝙾𝚁𝚃𝙴 | 𝚁𝙴𝙿𝙾𝚁𝚃* 〕━━⬣\n┃\n┃✿ *𝙽𝚞𝚖𝚎𝚛𝚘 | 𝚗𝚞𝚖𝚋𝚎𝚛*\n┃⇢ wa.me/${m.sender.split("@")[0]}\n┃\n┃✿ *𝙼𝚎𝚗𝚜𝚊𝚓𝚎 | 𝚝𝚎𝚡𝚝*\n┃: ${text}┃\n╰━━━〔 *${vs}* 〕━━━⬣` })
m.reply(`${lenguaje.info.text22}`)
}

if (command == 'donar') {
conn.sendMessage(m.chat, { text: lenguaje.info.text23(paypal) + `\n\n${lenguaje.info.text24}`, contextInfo:{ forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '',  newsletterName: 'INFINITY-WA 💫' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "body": `Ayuda a mantener el bot activo`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'solicitud') {
conn.sendMessage(m.chat, { text: lenguaje.grupos.text8(md, yt, nn7, fb), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '',  newsletterName: 'INFINITY-WA 💫' }, forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": wm, "body": vs, "previewType": "VIDEO", thumbnail: imagen1, sourceUrl: pickRandom([nna, nn, md, yt])}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'cuenta' || command == 'cuentaofc' || command == 'cuentaoficiales' || command == 'cuentas') {
conn.sendMessage(m.chat, { text: `*🔰 ${lenguaje['smsWel']()}* @${sender.split("@")[0]} ${lenguaje['cuenta'](nna, md, yt, tiktok, fb)}`, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '',  newsletterName: 'INFINITY-WA 💫' }, mentionedJid:[sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'infohost' || command == 'host') {
conn.sendMessage(m.chat, { text: lenguaje.info.text26(nna, host, paypal, fb),
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363301598733462@newsletter', 
serverMessageId: '', 
newsletterName: 'CorinPlus-Host ☁️' },
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐂O𝐑𝐈𝐍𝐏𝐋𝐔𝐒-𝐇𝐎𝐒𝐓 🤖`,
body: `¡El plus que necesitas!`,
"previewType": "PHOTO",
"thumbnailUrl": `https://telegra.ph/file/551d3d544d7bc607fd337.jpg`,
"sourceUrl": pickRandom([nna, panel2, host, md])}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == '5492266613038' || command == '593980586516' || command == '595975740803') {
if (!args.join(" ")) return m.reply(lenguaje.info.text25)
teks = `*|  |*`
teks1 = `\n\n`
teks2 = `\n\n`
for (let i of owner) {
conn.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
conn.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}

if (command == 'sc') {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
let res = await fetch('https://api.github.com/repos/elrebelde21/NovaBot-MD')
let json = await res.json()
let txt = `			 *乂 B O T  -  S C R I P T 乂*\n\n`
txt += `◦ *Nombre :* ${json.name}\n`
txt += `◦ *Visitantes :* ${json.watchers_count}\n`
txt += `◦ *Tamaños :* ${(json.size / 1024).toFixed(2)} MB\n`
txt += `◦  *Tamaños :* ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
txt += `◦  *Url* : ${json.html_url}\n\n`
txt += `${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues\n\n`
txt += res
await conn.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'INR', amount1000: '1000000000000', requestFrom: '0@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: txt, contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true }}}}}}, {})}

if (command == 'status' || command == 'velocidad') {
const { performance } = require('perf_hooks') 
const osu = require('node-os-utils') 
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]                
let respon = `      \`⧼⧼⧼ 🚀 ＶＥＬＯＣＩＤＡＤ ⧽⧽⧽\`
> ${latensi.toFixed(4)} Seg
> ${oldd - neww} _milisegundos_
                
\`✅ INFORMACIÓN DEL BOT\`               
➢ 𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳: ${runtime(process.uptime())}
➢ 𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂: ${Object.keys(global.db.data.users).length}

\`💻 INFO DE SERVIDOR\`
➢ RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
➢ 𝙿𝙻𝙰𝚃𝙰𝙵𝙾𝚁𝙼𝙰: ${os.platform()}
${lenguaje.info.text4} ${os.hostname()}
${lenguaje.info.text5} ${cpuUsage.toFixed(2)}%
${lenguaje.info.text6} ${totalMemory} GB

\`❐ Uso de memoria de NodeJS\`
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `\`❐ Uso total de CPU\`
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Uso de núcleo(s) de CPU (${cpus.length} CPU central)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
conn.sendButton(m.chat, botname, respon, pickRandom([img, img1, img2]), [['𝐌𝐄𝐍𝐔', `.menu`], ['𝐆𝐑𝐔𝐏𝐎𝐒', `.grupos`]], null, [['𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt])}`]], m)
//conn.sendFile(m.chat, imagen1, 'lp.jpg', respon, m, false, { contextInfo: { externalAdReply: {title: "𝘐𝘔𝘍𝘖𝘙𝘔𝘈𝘊𝘐𝘖𝘕 𝘈𝘊𝘌𝘙𝘊𝘈 𝘋𝘌𝘓 𝘉𝘖𝘛", body: "Click para entrar", sourceUrl: md, thumbnail: imagen3 }}})
}//`

if (command == 'speedtest' || command == 'speed') {
const cp = require('child_process') 
const {promisify} = require('util') 
const exec = promisify(cp.exec).bind(cp);
let o;
conn.fakeReply(m.chat, `🚀 Prueba de velocidad`, '0@s.whatsapp.net', 'test')
try {
o = await exec('python3 speed.py --secure --share');
} catch (e) {
o = e;
} finally {
const {stdout, stderr} = o;
if (stdout.trim()) m.reply(stdout);
if (stderr.trim()) m.reply(stderr)
console.log(stderr) 
}}}

module.exports = { info }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
