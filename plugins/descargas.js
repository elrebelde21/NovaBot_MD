require('../main.js')
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const fg = require('api-dylux')
const {savefrom, facebookdl, facebookdlv2, lyrics, lyricsv2, youtubedl, youtubedlv2, instagramdl } = require('@bochilteam/scraper')
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getFile, getRandom, msToTime, downloadMediaMessage } = require('../libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('../libs/youtube')
const { sizeFormatter } = require('human-readable')
const formatSize = sizeFormatter({std: 'JEDEC',
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`
});
let user = global.db.data.users[m.sender]
let limit = 320

async function descarga(m, command, conn, text, command, args, fkontak, from, buffer, getFile, q, includes, lolkeysapi) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (global.db.data.users[m.sender].banned) return

if (command === 'play' || command === 'play2') {
if (!text) return m.reply(`¿Qué está buscando?\nEjemplo: *${prefix + command}* ozuna`);

const yt_play = await search(args.join(' '));
if (!yt_play || yt_play.length === 0) return m.reply("No se encontró ninguna canción.");

const texto1 = `${lenguaje.descargar.text2}\n\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n\n◉ Link: ${yt_play[0].url}`;

await conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1, footer: wm,
buttons: [ {
buttonId: `.ytmp3 ${yt_play[0].url}`,
buttonText: {
displayText: "Audio 🔊",
},
type: 1,
},
{
buttonId: `.ytmp4 ${yt_play[0].url}`,
buttonText: {
displayText: "Video 🎥",
},
type: 1,
},
],
viewOnce: true,
headerType: 4,
}, { quoted: m });
//conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1 }, { quoted: m });
}

if (command === 'musica' || command === 'video') {
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
m.react(rwait);
const yt_play = await search(args.join(' '));
if (!yt_play || yt_play.length === 0) return m.reply("⚠️ No se encontró ningún resultado.");
const isVideo = command === 'video';
const texto1 = `${lenguaje.descargar[isVideo ? 'text3' : 'text2']}\n\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n\n${lenguaje.descargar[isVideo ? 'vid' : 'musica']}`;
    
await conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1 }, { quoted: m });
    
const apiUrl = isVideo ? `https://api.ryzendesu.vip/api/downloader/ytdl?url=${encodeURIComponent(yt_play[0].url)}` : `https://api.nyxs.pw/dl/yt-direct?url=${encodeURIComponent(yt_play[0].url)}`;
try {
const response = await fetch(apiUrl);
const data = await response.json();
if (isVideo) {
const videoInfo = data.resultUrl.video.find(v => v.quality === '360p');
if (!videoInfo) throw new Error();
await conn.sendMessage(m.chat, { video: { url: videoInfo.download }, fileName: `${data.result.title}.mp4`, mimetype: 'video/mp4', caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${data.result.title}` }, { quoted: m });
} else {
const audioUrl = data.result.urlAudio;
if (!audioUrl) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' }, { quoted: m })}
m.react(done);
} catch (error) {
const fallbackApiUrl = isVideo ? `https://eliasar-yt-api.vercel.app/api/download/youtube?text=${encodeURIComponent(yt_play[0].title)}&format=mp4` : `https://eliasar-yt-api.vercel.app/api/download/youtube?text=${encodeURIComponent(yt_play[0].title)}&format=mp3`;
try {
const fallbackResponse = await axios.get(fallbackApiUrl);
if (isVideo && fallbackResponse.data.status) {
const videoUrl = fallbackResponse.data.downloadInfo.downloadUrl;
await conn.sendMessage(m.chat, { video: { url: videoUrl }, fileName: `${fallbackResponse.data.downloadInfo.title}.mp4`, mimetype: 'video/mp4', caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${fallbackResponse.data.downloadInfo.title}` }, { quoted: m });
} else if (!isVideo && fallbackResponse.data.status) {
const audioUrl = fallbackResponse.data.downloadInfo.downloadUrl;
await conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} else {
throw new Error('No se pudo obtener el contenido.');
}} catch (fallbackError) {
m.react(error);
m.reply(`Ocurrió un error inesperado - ${fallbackError.message}`);
}}}

if (command == 'play3' || command == 'play4') {
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`)

const yt_play = await search(args.join(' '))
const texto1 = `${lenguaje.descargar.text2}\n\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}

◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}

◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}

◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}

◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}

◉ Link: ${yt_play[0].url}`.trim()

await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `.ytmp3 ${text}`], ['Video', `.ytmp4 ${text}`], ['Mas resultados', `.yts ${text}`]], null, null, m)
}

if (command == 'ytmp3' || command == 'ytmp3doc' || command == 'ytmp4' || command == 'ytmp4doc') {
if (!text) return m.reply(lenguaje.descargar.text1 + `\n• *${prefix + command}* ozuna\n• ${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`);
try {
m.react(rwait);
let vid = (await yts(text)).all[0];
const yt_play = await search(args.join(" "));
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid;
let message = await conn.sendMessage(m.chat, {
text: `${lenguaje.descargar.text3}\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n◉ *Link:* ${yt_play[0].url}\n\n${lenguaje.descargar.text7}`,
contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, { quoted: m, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 });

if (command == 'ytmp3' || command == 'ytmp3doc') {
try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(args)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) {
return m.react("❌")}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
let q = '128kbps';
let v = youtubeLink;
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' });
} catch (error) {
m.react(error);
return m.reply(info.error);
}}} else if (command == 'ytmp4' || command == 'ytmp4doc') {
let q = args[1] || '360p';
try {
const yt = await fg.ytv(args[0], q);
let { title, dl_url, quality, size } = yt;

conn.sendMessage(m.chat, { document: { url: dl_url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${title}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 });
} catch {
try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(args)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) {
return m.react("❌")}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, mimetype: 'video/mp4' }, { quoted: m });
} catch {
try {
let q = '128kbps';
let v = youtubeLink;
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: `🔰 𝘼𝙦𝙪𝙞 𝙚𝙨𝙩𝙖 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 \n🔥 𝙏𝙞𝙩𝙪𝙡𝙤: ${ttl}` }, { quoted: m });
} catch (e) {
console.error(e);
m.react("❌");
m.reply(info.error);
}}}}
m.react(done);
} catch (err) {
m.react(error);
return m.reply(info.error);
}}

if (command == 'play.1' || command == 'play.2') {
let data, buff, mimeType, fileName, apiUrl;
let enviando = false;
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`)
if (enviando) return;
enviando = true
m.react(rwait)
try {
const apiUrls = [`https://api.cafirexos.com/api/ytplay?text=${text}`, `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}`];
for (const url of apiUrls) {
try {
const res = await fetch(url);
data = await res.json();
if (data.resultado && data.resultado.url) {
break;
}} catch {}
}
if (!data.resultado || !data.resultado.url) {
enviando = false;
} else {
try {
if (command == 'play.1') {
m.reply(lenguaje.descargar.audio)
apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp3?url=${data.resultado.url}`;
mimeType = 'audio/mpeg';
fileName = 'error.mp3';
buff = await conn.getFile(apiUrl);
m.react(done)
} else if (command == 'play.2' || command == 'video') {
m.reply(lenguaje.descargar.video)
apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp4?url=${data.resultado.url}`;
mimeType = 'video/mp4';
fileName = 'error.mp4';
buff = await conn.getFile(apiUrl);
m.react(done)
}} catch {
try {
if (command == 'play.1') {
apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp3?url=${data.resultado.url}`;
mimeType = 'audio/mpeg';
fileName = 'error.mp3';
buff = await conn.getFile(apiUrl);
m.react(done)
} else if (command == 'play.2' || command == 'video') {
apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp4?url=${data.resultado.url}`;
mimeType = 'video/mp4';
fileName = 'error.mp4';
buff = await conn.getFile(apiUrl);
m.react(done)
}} catch {
enviando = false;
m.reply(info.error)
m.react(error)
}}}

if (buff) {
await conn.sendMessage(m.chat, { [mimeType.startsWith('audio') ? 'audio' : 'video']: buff.data,
mimetype: mimeType, fileName: fileName }, { quoted: m });
enviando = false;
} else {
enviando = false;
}} catch (error) {
enviando = false;
m.react(error)
m.reply(info.error)
}}

if (command == 'music' || command == 'spotify') {
if (!text) return m.reply(lenguaje.descargar.text8)
m.react(rwait)
m.reply(lenguaje.descargar.espere)
try {
let songInfo = await spotifyxv(text);
if (!songInfo.length) throw `*No se encontró la canción.*`;
let song = songInfo[0]; 
const res = await fetch(`https://deliriussapi-oficial.vercel.app/download/spotifydl?url=${song.url}`);
const data = await res.json();
if (!data || !data.data || !data.data.url) throw "No se pudo obtener el enlace de descarga.";
let spotifyMessage = `*• Título:* ${song.name}\n*• Artista:* ${song.artista.join(', ')}\n*• Cover:* ${data.data.cover}\n\n> 🚀 *ᴱⁿᵛᶦᵃⁿᵈᵒ ᶜᵃⁿᶜᶦᵒ́ⁿ ᵃᵍᵘᵃʳᵈᵉ ᵘⁿ ᵐᵒᵐᵉⁿᵗᵒ....*`;
await conn.sendMessage(m.chat, {text: spotifyMessage, contextInfo: { forwardingScore: 9999999, isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: true,
title: wm,
mediaType: 1,
thumbnailUrl: data.data.image,
mediaUrl: data.data.url,
sourceUrl: data.data.url
}}}, { quoted: m });
conn.sendMessage(m.chat, { audio: { url: data.data.url }, fileName: `${song.name}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m });
m.react('✅️');
} catch (e1) {
try {
let songInfo = await spotifyxv(text)
if (!songInfo.length) throw `*No se encontró una canción.*`
let res = songInfo[0]
let fileSizeInMB = (await getBuffer(res.url)).length / (1024 * 1024)
let shortURL = await getTinyURL(res.url)
let spotifyi = `*• Titulo:* ${res.name}
*• Artista:* ${res.artista.join(', ')}
*• Url:* ${shortURL}

> 🚀 *ᴱⁿᵛᶦᵃⁿᵈᵒ ᶜᵃⁿᶜᶦᵒ́ⁿ ᵃᵍᵘᵃʳᵈᵉ ᵘⁿ ᵐᵒᵐᵉⁿᵗᵒ....*`

let resImg = await fetch(res.imagen)
let thumbb = await resImg.buffer()
let { videos } = await search(res.name)
let q = '128kbps'
let v = videos[0].url
let yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
let dl_url = await yt.audio[q].download()
let ttl = await yt.title
let size = await yt.audio[q].fileSizeH
let img = await getBuffer(res.imagen)
await conn.sendMessage(m.chat, {text: spotifyi, contextInfo: { forwardingScore: 9999999, isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
containsAutoReply: true,
renderLargerThumbnail: true,
title: wm,
mediaType: 1,
thumbnail: img,
thumbnailUrl: img,
mediaUrl: dl_url,
sourceUrl: dl_url
}}}, { quoted: m });
conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: `${ttl}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })
m.react('✅️')
} catch (error) {
m.react(error)
console.error(error);
return m.reply(info.error)
}}}

if (command == 'gitclone') {
if (!args[0]) return m.reply(lenguaje.descargar.text9 + `\n${prefix + command} ${md}`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalido!!`)
m.react('🕔')
m.reply(lenguaje.descargar.text10)
try {
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename + '.zip', mimetype: 'application/zip' }, { quoted: m, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 }).catch((err) => m.reply(info.error))
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
m.react(done)
} catch {
m.react(error)
m.reply(info.error)
}}

if (command == 'tiktok' || command == 'tt') {
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`Link invalido!!`)
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
try {
require('../libs/tiktok').Tiktok(args).then(data => {
//conn.sendButton(m.chat, `*🔥 AQUI ESTA TU VIDEO DEL TIKTOK*\n_*• Titulo:*_ ${result.title}`, 'Server proveido por NovaBot-MD', data.nowm, [['Descargar audio', `.tik2 ${text}`]], null, null, m)})
conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
} catch {
m.reply(info.error)
}}

if (command == 'tik2') {
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`Link invalido!!`)
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
try {
require('../libs/tiktok').Tiktok(args).then(data => {
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 })})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
} catch {
m.reply(info.error)
}}

if (command == 'tiktokimg' || command == 'ttimg') {
if (!text) return m.reply(`${lenguaje.lengua.espere}\n${prefix + command} https://vm.tiktok.com/ZMjnPvJuF/`)
m.react("📥")
let imagesSent
if (imagesSent) return;
imagesSent = true
try {
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
let tioShadow = await ttimg(text);
let result = tioShadow?.data;
for (let d of result) {
await conn.sendMessage(m.chat, { image: { url: d }}, { quoted: m, ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100})};
imagesSent = false
} catch (e) {
imagesSent = false
return m.reply(`${info.error}\n\n${e}`)
}}

if (command == 'lyrics' || command == 'letra') {
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const {getTracks} = require('@green-code/music-track-data') 
const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
if (!teks) return m.reply(lenguaje.descargar.text11 + `\n${prefix + command} ozuna`)
m.react('🕔')
try {
const res = await fetch(`https://deliriussapi-oficial.vercel.app/search/letra?query=${encodeURIComponent(text)}`);
const data = await res.json();
if (data.status !== "200" || !data.data) return m.reply('No se encontró la letra de la canción especificada.');
const textoLetra = `*🎤 𝙏𝙞𝙩𝙪𝙡𝙤:* ${data.data.title || 'Desconocido'}\n*👤 𝘼𝙪𝙩𝙤𝙧:* ${data.data.artist || 'Desconocido'}\n*🔗 𝘼𝙧𝙩𝙞𝙨𝙩𝙖:* ${data.data.artistUrl || 'No disponible'}\n*🎶 𝙐𝙧𝙡:* ${data.data.url || 'No disponible'}\n\n*📃🎵 𝙇𝙚𝙩𝙧𝙖:*\n${data.data.lyrics || 'Letra no disponible'}`;
const img = data.data.image
conn.sendFile(m.chat, img, 'error,jpg', textoLetra, m);
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)
m.react(done)
} catch (e) {
m.reply(`\`\`\`⚠️ OCURRIO UN ERROR ⚠️\`\`\`\n\n> *Reporta el siguiente error a mi creador con el comando:*#report\n\n>>> ${e} <<<< `)       
console.log(e)
}}

    if (command == 'mediafire') {
        const {
            mediafireDl
        } = require('../libs/mediafire.js')
        if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://www.mediafire.com/file/admrdma1ff3cq10/Siete-Ocho.zip/file`)
        m.react("📥")
        const baby1 = await mediafireDl(text)
        if (baby1[0].size.split('MB')[0] >= 1500) return reply(lenguaje.descargar.text15 + util.format(baby1))
        const result4 = `╭━─━─━─≪💎≫─━─━─━╮
┆      *MEDIAFIRE* 
┆——————«•»——————
┆🔸️ ${lenguaje.descargar.text12} ${baby1[0].nama} 
┆——————«•»——————
┆🔸️ ${lenguaje.descargar.text13} ${baby1[0].size} 
┆——————«•»——————
┆🔸️ ${lenguaje.descargar.text14} ${baby1[0].mime}
╰━─━─━─≪💎≫─━─━─━╯\n\n${lenguaje.descargar.descargado}`
        m.reply(`${result4}`)
        conn.sendMessage(m.chat, {
            document: {
                url: baby1[0].link
            },
            fileName: baby1[0].nama,
            mimetype: baby1[0].mime,
            quoted: m,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: "💫",
                    showAdAttribution: true,
                    mediaType: 2,
                    thumbnail: fs.readFileSync(`./media/menu.jpg`),
                    mediaUrl: md,
                    sourceUrl: md
                }
            }
        }, {
            quoted: m,
            ephemeralExpiration: 24 * 60 * 100,
            disappearingMessagesInChat: 24 * 60 * 100
        })
        db.data.users[m.sender].limit -= 2
        m.reply('2 ' + info.limit)
    }
}

async function descarga2(m, command, text, args, conn, lolkeysapi, isCreator) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (global.db.data.users[m.sender].banned) return
if (command == 'facebook' || command == 'fb') {
const igeh = require(`../libs/scraper.js`)
if (!args[0] || !text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://fb.watch/ncowLHMp-x/?mibextid=rS40aB7S9Ucbxw6v`)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://fb.watch/ncowLHMp-x/?mibextid=rS40aB7S9Ucbxw6v`)
m.react("📥")
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
     try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/facebook?url=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.urls || delius.urls.length === 0) return m.react("❌")
const downloadUrl = delius.urls[0].hd || delius.urls[0].sd;
if (!downloadUrl) return m.react("❌");
await conn.sendFile(m.chat, downloadUrl, 'video.mp4', '✅ Aquí está tu video de Facebook', m);
} catch (err1) {
try {
const d2ata = await facebook.v1(args[0]);
let r2es = '';
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}` }
conn.sendFile(m.chat, r2es, 'error.mp4', `✅ 𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n\n`, m);
m.react(`✅`) 
} catch (err2) {
try {
const req = await igeh(args[0]);
conn.sendMessage(m.chat, {video: {url: req.url_list}}, m);
} catch (err1_3) {
try {
const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
const Jjson = await Rres.json();
let VIDEO = Jjson.result[0];
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
conn.sendFile(m.chat, VIDEO, 'error.mp4', `✅ 𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n\n`, m);
m.react(`✅`) 
} catch (err4) {
try {
const ress = await fg.fbdl(args[0]);
const urll = await ress.data[0].url;
await conn.sendFile(m.chat, urll, 'error.mp4', '✅ 𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n\n', m);
m.react(`✅`) 
} catch (err5) {
try {
const res = await fbDownloader(args[0]);
for (const result of res.download) {
const ur = result.url;
await conn.sendFile(m.chat, ur, 'error.mp4', '✅ 𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n\n', m);              
m.react(`✅`)               
}} catch (err6) {
try {
const res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=nekosmic&q=${args[0]}`);
const json = await res3.json();
const url3 = await json.video;
await conn.sendFile(m.chat, url3, 'error.mp4', '✅ 𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊\n\n', m);
m.react(`✅`)               
} catch (err7) {
try {
const {result} = await facebookdl(args[0]).catch(async (_) => await facebookdlv2(args[0])).catch(async (_) => await savefrom(args[0]));
for (const {url, isVideo} of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, '✅ 𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊', m);
m.react(`✅`)                 
} catch (e) {
m.react(`❌`) 
console.log(e) 
}}}}}}}}}

if (command == 'instagram' || command == 'ig') {
const datas = global
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=`)
m.react("📥")
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/instagram?url=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.data || delius.data.length === 0) return m.react("❌");
const downloadUrl = delius.data[0].url;
const fileType = delius.data[0].type;
if (!downloadUrl) return m.react("❌");

if (fileType === 'image') {
await conn.sendFile(m.chat, downloadUrl, 'ig.jpg', '_*Aqui tiene tu imagen de Instagram*', m);
m.react('✅')
} else if (fileType === 'video') {
await conn.sendFile(m.chat, downloadUrl, 'ig.mp4', '*Aqui esta el video de Instagram*', m);
m.react('✅')
} else {
return m.react("❌"); 
}} catch {   
try {
const img = await instagramDl(args[0]);
for (let i = 0; i < img.length; i++) {
const bufferInfo = await getBuffer(img[i].download_link);
if (bufferInfo.detectedType.mime.startsWith('image/')) {
await conn.sendMessage(m.chat, {image: {url: img[i].download_link}}, {quoted: m});
} else if (bufferInfo.detectedType.mime.startsWith('video/')) {
await conn.sendFile(m.chat, img[i].download_link, 'igdl.mp4', `*Aqui esta el video de Instagram*`, m)
//conn.sendMessage(m.chat, {video: {url: img[i].download_link }}, {quoted: m});
await m.react('✅')
}}} catch {   
try {
const datTa = await instagram.download(args[0]);
for (const urRRl of datTa) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const tXXxt = `_${shortUrRRl}_`.trim();
conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
await new Promise((resolve) => setTimeout(resolve, 10000));
await m.react('✅')    
}} catch {
try {
const resultss = await instagramGetUrl(args[0]).url_list[0];
const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt2 = `_${shortUrl2}_`.trim();
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
await m.react('✅')
} catch {
try {
const resultssss = await instagramdl(args[0]);
const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt4 = `_${shortUrl3}_`.trim();
for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
await m.react('✅')
} catch {
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const json = await human.json();
const videoig = json.result;
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt1 = `_${shortUrl1}_`.trim();
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
await m.react('✅')
} catch (e) {
await m.react('❌')
console.log(e)
}}}}}}}

if (command == 'igstalk') {
if (!args[0]) return m.reply(lenguaje.descargar.text17 + ` ${prefix + command} Emilia`)
m.react("📥")
try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/tools/igstalk?username=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.data) return m.react("❌");
const profile = delius.data;
const txt = `┏━━≪ *STALKING* ≫━•
┃🔹 ${lenguaje.descargar.text19}  ${profile.username}
┃🔹 ${lenguaje.descargar.text12} ${profile.full_name}
┃🔹 *Biografía*: ${profile.biography}
┃🔹 *Verificado*: ${profile.verified ? 'Sí' : 'No'}
┃🔹 *Cuenta privada*: ${profile.private ? 'Sí' : 'No'}
┃🔹 *Seguidores*: ${profile.followers}
┃🔹 *Seguidos*: ${profile.following}
┃🔹 *Publicaciones*: ${profile.posts}
┃━━━━━━━━━━━━━━
┃🔹 *URL*: ${profile.url}
┗━━━━━━━━━━━━━•`;
await conn.sendFile(m.chat, profile.profile_picture, 'insta_profile.jpg', txt, m, null, fake);
 m.react("✅");
} catch (e2) {
try {     
let res = await fg.igStalk(args[0])
let te = `┏━━≪ *STALKING* ≫━•
┃🔸🔖 ${lenguaje.descargar.text12} ${res.name} 
┃🔸🔖 ${lenguaje.descargar.text19} ${res.username} 
┃🔸👥 ${lenguaje.descargar.text20} ${res.followersH}
┃🔸🫂 ${lenguaje.descargar.text21} ${res.followingH}
┃🔸📌 ${lenguaje.descargar.text22} ${res.description}
┃🔸🏝️ ${lenguaje.descargar.text23} ${res.postsH}
┃━━━━━━━━━━━━━━
┃🔸 *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
┗━━━━━━━━━━━━━•`
await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
m.react("✅");  
} catch (e) {
await m.react(`❌`) 
m.reply(info.error)
console.log(e)
}}}

if (command == 'tiktokstalk') {
if (!args[0]) return m.reply(lenguaje.descargar.text17 + ` ${prefix + command} EmiliaMermes`)
try {
const apiUrl = `https://deliriussapi-oficial.vercel.app/tools/tiktokstalk?q=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.result || !delius.result.users) return m.react("❌");
const profile = delius.result.users;
const stats = delius.result.stats;             
const txt = `*┏━━≪ TIKTOK STALK ≫━•*
*┃• Nombre de usuario*: ${profile.username}
*┃• Nickname*: ${profile.nickname}
*┃• Verificado*: ${profile.verified ? 'Sí' : 'No'}
*┃• Seguidores*: ${stats.followerCount.toLocaleString()}
*┃• Seguidos*: ${stats.followingCount.toLocaleString()}
*┃• Likes Totales*: ${stats.heartCount.toLocaleString()}
*┃• Videos*: ${stats.videoCount.toLocaleString()}
*┃• Firma*: ${profile.signature}
*┃━━━━━━━━━━━━━━*
*┃• URL*: ${profile.url}
*┗━━━━━━━━━━━━━•*`;
await conn.sendFile(m.chat, profile.avatarLarger, 'tt.png', txt, m)
m.react("✅");
} catch (e2) {
try {
let res = await fg.ttStalk(args[0])
let txt = `┏━━≪ *TIKTOK STALK* ≫━•
┃🔖 ${lenguaje.descargar.text12} ${res.name}
┃🔖 ${lenguaje.descargar.text19} ${res.username}
┃👥 ${lenguaje.descargar.text20} ${res.followers}
┃🫂 ${lenguaje.descargar.text21} ${res.following}
┃📌 ${lenguaje.descargar.text22} ${res.desc}
┃━━━━━━━━━━━━━━
┃ *🔗 Link* : https://tiktok.com/${res.username}
┗━━━━━━━━━━━━━•`
await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
m.react("✅");
} catch (e) {
await m.react(`❌`) 
m.reply(info.error)
console.log(e)
}}}

if (command == 'apk' || command == 'modoapk') {
let { search, download } = require('aptoide-scraper')
const apkpureApi = 'https://apkpure.com/api/v2/search?q=';
const apkpureDownloadApi = 'https://apkpure.com/api/v2/download?id=';        
if (!text) return m.reply(lenguaje.descargar.text24)
const res = await fetch(`https://deliriussapi-oficial.vercel.app/download/apk?query=${text}`);
const data = await res.json();
if (!data.status || !data.data) {
return conn.reply(m.chat, `⚠️ No se pudo encontrar el APK solicitado. Intenta con otro nombre.`, m);
}
const apkData = data.data;
let response = `╭━─━─━─≪≫─━─━─━╮
│ ≡ ${lenguaje.descargar.text25} ≡
│——————«•»——————
│🔸📌 ${lenguaje.descargar.text12} ${apkData.name}
│🔸👤 *Desarrollo:*  ${apkData.developer}
│🔸🕒 ${lenguaje.descargar.text26} ${apkData.publish}
│🔸📥 ${lenguaje.descargar.text27} ${apkData.size}
╰━─━─━─≪≫─━─━─━╯

> *⏳ ᴱˢᵖᵉʳᵉ ᵘⁿ ᵐᵒᵐᵉⁿᵗᵒ ˢᵘˢ ᵃᵖᵏ ˢᵉ ᵉˢᵗᵃ ᵉⁿᵛᶦᵃⁿᵈᵒ...*`
await conn.sendMessage(m.chat, { image: { url: apkData.image }, caption: response }, { quoted: m,ephemeralExpiration: 24 * 60 * 100, disappearingMessagesInChat: 24 * 60 * 100 }); 
try {   
if (apkData.size.includes('GB') || parseFloat(apkData.size.replace(' MB', '')) > 999) {
return await m.reply('*𝙀𝙡 𝙖𝙥𝙠 𝙚𝙨 𝙢𝙪𝙮 𝙥𝙚𝙨𝙖𝙙𝙤.*') 
}
await conn.sendMessage(m.chat, {document: { url: apkData.download }, mimetype: 'application/vnd.android.package-archive', fileName: `${apkData.name}.apk`, caption: null }, { quoted: m });
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
m.react("✅") 
} catch (error) {
try {
const searchA = await search(text);
const data5 = await download(searchA[0].id);
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await m.reply('*𝙀𝙡 𝙖𝙥𝙠 𝙚𝙨 𝙢𝙪𝙮 𝙥𝙚𝙨𝙖𝙙𝙤.*')}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m}); 
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
m.react("✅") 
} catch (e) {
m.react(`❌`) 
return m.reply(info.error)
}}}

if (command == 'gdrive') {
const fg = require('api-dylux')
let free = 300 // limite de descarga
let prem = 650
if (!args[0]) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*`)
try {
m.react("📥")
let res = await fg.GDriveDl(args[0])
let limit = user.premium || isCreator ? user.premium : free
let isLimit = limit * 1024 < res.fileSizeB
await m.reply(isLimit ? `${lenguaje.descargar.text10}` : `\n• 𝐄𝐥 𝐀𝐫𝐜𝐡𝐢𝐯𝐨 𝐬𝐮𝐩𝐞𝐫𝐨 𝐞𝐥 𝐥𝐢𝐦𝐢𝐭 𝐝𝐞 *+${free} 𝐌𝐁* 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐝𝐞 𝐦𝐚𝐬 𝐝𝐞 : *${prem} 𝐌𝐁* 𝐏𝐚𝐬𝐚𝐫𝐭𝐞 𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐩𝐨𝐧 : #premium`)
if (!isLimit) conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
} catch (e) {
m.reply(info.error)
console.log(e)
}}

if (command == 'twitter' || command == 'tw' || command == 'x') {
if (!args[0]) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
m.react(rwait)
try {
let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
conn.sendFile(m.chat, HD, 'twitter.mp4', `•─≪ *TWITTER DL* ≫─•\n\n${desc}`, m)
m.react(done)
db.data.users[m.sender].limit -= 2
m.reply('2 ' + info.limit)
} catch (e) {
m.reply(info.error)
console.log(e)
}}}

async function search(query, options = {}) {
const search = await yts.search({query,
hl: "es",
gl: "ES",
...options
});
return search.videos
};

function MilesNumber(number) {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = "$1.";
    let arr = number.toString().split(".");
    arr[0] = arr[0].replace(exp, rep);
    return arr[1] ? arr.join(".") : arr[0]
};

function secondString(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay
};

function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)
    })
};

async function spotifyxv(query) {
let token = await tokens();
let response = await axios({
method: 'get',
url: 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=track',
headers: {
Authorization: 'Bearer ' + token,
},
})
const tracks = response.data.tracks.items
const results = tracks.map((track) => ({
name: track.name,
artista: track.artists.map((artist) => artist.name),
album: track.album.name,
duracion: timestamp(track.duration_ms),
url: track.external_urls.spotify,
imagen: track.album.images.length ? track.album.images[0].url : '',
}))
return results
}
async function tokens() {
const response = await axios({
method: 'post',
url:
'https://accounts.spotify.com/api/token',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
Authorization: 'Basic ' + Buffer.from('acc6302297e040aeb6e4ac1fbdfd62c3:0e8439a1280a43aba9a5bc0a16f3f009').toString('base64'),
},
data: 'grant_type=client_credentials',
})
return response.data.access_token
}
function timestamp(time) {
const minutes = Math.floor(time / 60000);
const seconds = Math.floor((time % 60000) / 1000);
return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

async function getTinyURL(text) {
try {
let response = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`);
return response.data;
} catch (error) {
return text;
}}

async function ytMp3(url) {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url).then(async (getUrl) => {
            let result = [];
            for (let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
                    let {
                        contentLength
                    } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        audio: item.url,
                        size: bytes
                    }
                }
            };
            let resultFix = result.filter(x => x.audio != undefined && x.size != undefined)
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: tinyUrl,
                result2: resultFix,
                thumb
            })
        }).catch(reject)
    })
};

async function ytMp4(url) {
    return new Promise(async (resolve, reject) => {
        ytdl.getInfo(url).then(async (getUrl) => {
            let result = [];
            for (let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
                    let {
                        qualityLabel,
                        contentLength
                    } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes
                    }
                }
            };
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined)
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: tinyUrl,
                rersult2: resultFix[0].video,
                thumb
            })
        }).catch(reject)
    })
};

async function ytPlay(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async (getData) => {
            let result = getData.videos.slice(0, 5);
            let url = [];
            for (let i = 0; i < result.length; i++) {
                url.push(result[i].url)
            }
            let random = url[0];
            let getAudio = await ytMp3(random);
            resolve(getAudio)
        }).catch(reject)
    })
};

async function ytPlayVid(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async (getData) => {
            let result = getData.videos.slice(0, 5);
            let url = [];
            for (let i = 0; i < result.length; i++) {
                url.push(result[i].url)
            }
            let random = url[0];
            let getVideo = await ytMp4(random);
            resolve(getVideo)
        }).catch(reject)
    })
};

async function GDriveDl(url) {
    let id;
    if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL';
    id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
    if (!id) throw 'ID Not Found';
    const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
        method: 'post',
        headers: {
            'accept-encoding': 'gzip, deflate, br',
            'content-length': 0,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'origin': 'https://drive.google.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
            'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
            'x-drive-first-party': 'DriveWebUi',
            'x-json-requested': 'true'
        }
    });
    const {
        fileName,
        sizeBytes,
        downloadUrl
    } = JSON.parse((await res.text()).slice(4));
    if (!downloadUrl) throw 'Link Download Limit!';
    const data = await fetch(downloadUrl);
    if (data.status !== 200) throw data.statusText;
    return {
        downloadUrl,
        fileName,
        fileSize: formatSize(sizeBytes),
        mimetype: data.headers.get('content-type')
    };
}

async function ttimg(link) {
    try {
        let url = `https://dlpanda.com/es?url=${link}&token=G7eRpMaa`;
        let response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        let imgSrc = [];
        $('div.col-md-12 > img').each((index, element) => {
            imgSrc.push($(element).attr('src'));
        });
        if (imgSrc.length === 0) {
            return {
                data: '*[ ⚠️ ] No se encontraron imágenes en el enlace proporcionado.*'
            };
        }
        return {
            data: imgSrc
        };
    } catch (error) {
        console.lo(error);
        return {
            data: '*[ ⚠️ ] No se obtuvo respuesta de la página, intente más tarde.*'
        };
    };
};

async function igeh(url_media) {
return new Promise(async (resolve, reject)=>{
const BASE_URL = 'https://instasupersave.com/';
try {
const resp = await axios(BASE_URL);
const cookie = resp.headers['set-cookie']; // obtener cookie de la solicitud
const session = cookie[0].split(';')[0].replace('XSRF-TOKEN=', '').replace('%3D', '');
const config = {method: 'post', url: `${BASE_URL}api/convert`, headers: {'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`}, data: {url: url_media}};
axios(config).then(function(response) {
const ig = [];
if (Array.isArray(response.data)) {
response.data.forEach((post) => {
ig.push(post.sd === undefined ? post.thumb : post.sd.url);
})} else {
ig.push(response.data.url[0].url)}
resolve({results_number: ig.length, url_list: ig});
}).catch(function(error) {
reject(error.message)});
} catch (e) {
reject(e.message);
}})}

module.exports = { descarga, descarga2 }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
