const welcome = (number, groupname) => {
    return `𝗛𝗼𝗹𝗮! @${number}. Bienvenido al grupo ${groupname}`
}
exports.welcome = welcome

const bye = (number) => {
    return `Hasta la proxima @${number}. Ya no vuelves a entrar :)👋`
}
exports.bye = bye