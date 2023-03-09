var agora = new Date() // pega a hora exata do sistema
var hora = agora.getHours() // converte a hora e salva na variavel hora.
console.log(`Agora são exatamente ${hora} horas `)
if (hora < 12){
    console.log('Bom Dia!')
} else if (hora <= 18 ){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}