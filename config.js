const ownerNumber = ["50588287489@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '50588287489' 
// mude para seu numero

const gimagenotregister = true
// quando não há comando registrado o bot procura no google image

const sgooglenotregister = true
// quando não há comando registrado o bot procura uma pesquisa no google

const msgwelcomeimg = (numero, groupname) => {
    return `Sea bienvenido ${numero}\n\nEscribe ${prefix}menu para la lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adiossss ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Sea bienvenido ${numero}\n\abre el menu de Terror reid bot`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'imgbb api key, cree su cuenta y obtenga la clave'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = 'TERROR REID BOT\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Tu número está bloqueado, es decir, no te escucha 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando está bloqueado, comuníquese con el propietario del bot para averiguar el pq🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Ejecutar miembro común, la prohibición está cerca*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Eres admirado y te prohibiré enviar una especie de mensaje prohibido.*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm porno con antiporn activado, ya sabes, ya sabes..'
// mensagem de ban no antiporn

const adminmsgporn = '*Eres admirado, te prohibiré enviar porno*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Corra Membro comum, O ban está próximo...'
// mensagem de ban no antilink

const adminmsglink = 'Este es un enlace amigo ... oh, eres adm 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'esto está en la lista de palabras prohibidas por el bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = '¿Palabra prohibida? ¿Sabes verdad?'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, acepte este café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tengas un buen dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Dio error perrin, proba otra vez :/'
// mensagem de erro

const notregister = `*Comando no registrado, escriva ${prefix}menu para ver a lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Te ves como un cangrejo, un cangrejo triturado 😡'
const cadebot = 'Me llamo onii-chan 👉👈?'
const botfdp = 'Vete a la mierda chico, te golpea cuando estás dormido'
const botgostoso = 'Arigato go sai masu 😳👉👈'
const botfofo = 'Arigato go sai masu 😳👉👈'
const botbaianor = 'Invité a tu placa madre a mi red, tu cornudo'
const botcorno = 'Vete a la mierda, jugador ff, comprador de paquete de texturas'
const botputa = 'Señora tu madre 😡'
const botgay = 'Dijo que el hombre rueda 😡'
const botviado = 'Dijo que el hombre rueda 😡'
const numbotfeio = 'Dama su madre 😡'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '🌞 Aguarda un segundo perrin... 🌞',
    success: '✔️ Listo ✔️',
    error: {
        stick: '❌ Falló, se produjo un error al convertir la imagen en una pegatina ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando solo puede ser usado en grupos! ❌',
        ownerG: '❌ Este comando solo puede ser usado por el prop. del grupo! ❌',
        ownerB: '❌Este comando solo puede ser utilizado por el número de propietario! ❌',
        admin: '❌ SILENCIO MEMBRO COMUM VOZ NO TENES MORAL PARA USAR ESTE COMANDO ❌',
        Badmin: '❌ Este comando solo puede ser usado cuando el bot se torna administrador! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Mi creador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=50588287489:+505 8828 7489\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber