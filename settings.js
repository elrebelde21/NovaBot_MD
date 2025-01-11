const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js') 

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [
["5214774444444", "Owner", true], 
["593968585383"], 
["573008499604"], 
["5492266466080"], 
["595986172767"], 
["5492266613038"], 
["85254109507"],
["5217294888993"], 
["5214434703586"], 
["5214437863111"], 
["595986172767"], 
["595992302861"], 
["5217441298510"], 
["5491155983299"], 
["5493795319022"], 
["5217821153974"], 
["85265035791"],
["573012482597"]]

global.mods = []
global.premium = []  
global.blockList = []  

//---------[ NOMBRE/INFO ]---------
global.botname = "𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃"
global.wm = 'Ｎ Ｏ Ｖ Ａ Ｂ Ｏ Ｔ- Ｍ Ｄ 💫'
global.vs = '1.1.8'

//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +59309090909
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Bogota' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [`/`]

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');
global.apis = 'https://delirius-apiofc.vercel.app'

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = "𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃"
global.author = `${vs}`
 
//---------[ IMAGEN ]---------
global.img = "https://qu.ax/Zgqq.jpg"
global.img1 = 'https://qu.ax/hNJk.jpg'
global.img2 = 'https://qu.ax/jzhN.jpg'

global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')

//---------[ ENLACES ]---------
global.md = 'https://github.com/elrebelde21/NovaBot_MD'
global.yt = 'https://www.youtube.com/@elrebelde.21'
global.tiktok = 'https://www.tiktok.com/@elrebelde.21'
global.fb = 'https://www.facebook.com/elrebelde21'
global.faceb = 'https://facebook.com/groups/872989990425789/'
global.paypal = 'https://paypal.me/OficialGD' 

global.host = 'https://chat.whatsapp.com/KGPhTIfgOzZCMNqoc3R7OW' //Infinity-host
global.nna = 'https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A' //Update 
global.nna2 = 'https://whatsapp.com/channel/0029Vau57ykEwEk5CgosvU3v' //lolibot
global.test = 'https://whatsapp.com/channel/0029Vae6j714Y9loutP3Au29' //test
global.nn = 'https://chat.whatsapp.com/HNDVUxHphPzG3cJHIwCaX5' //LoliBot
global.nn2 = 'https://chat.whatsapp.com/H4hxytyGvucIF1k0UAR7es' //Loli & Nova
global.nn3 = 'https://chat.whatsapp.com/Ej5AUrpmYnJKYtEa6YMwK6' //Grupo de Colaboracion
global.nn4 = 'https://chat.whatsapp.com/E9qJfvlLjENKAxnhII9rao' // Grupo COL 2
global.nn5 = 'https://chat.whatsapp.com/B6vVEmV3zffHNyabOMtzSb' //Grupo COL 3
global.nn6 = 'https://chat.whatsapp.com/Em4Byf4w5VgHObPvZQlfnM' //test
global.nn7 = 'https://chat.whatsapp.com/FDRfhecUGrCEQswkg8FUYz' //Grupo ayuda sobre el bot
global.nn8 = 'https://chat.whatsapp.com/IstOAq2RnBx687WhQpOYK8' //enlace lolibot
global.multi = 'https://chat.whatsapp.com/IB9Vs7mZ03BBkH3reCU8Dw' //Grupo COL 4
global.nna2 = 'Em4Byf4w5VgHObPvZQlfnM'

//---------[ INFO ]--------- 
global.info = { wait: '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*', 
waitt: '*⌛ _Cargando..._ ▬▬▭▭▭*', 
waittt: '*⌛ _Cargando..._ ▬▬▬▬▭▭*', 
waitttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*', 
waittttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*', 
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
premium: `${lenguaje['prem']()}`,                
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 90 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//---------------[ IDs de canales ]----------------

global.ch = {
ch1: '120363297379773397@newsletter', 
ch2: '120363355261011910@newsletter', 
ch3: '120363160031023229@newsletter',
ch4: '120363301598733462@newsletter',
ch5: '120363374372683775@newsletter', 
}

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
