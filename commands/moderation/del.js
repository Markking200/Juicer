const embed= require("../../embeds/embeds")

module.exports={
    name: 'del',
    description: 'Deletes the given amount of Messages',
    args:true,
    permissions:'ADMINISTRATOR',
    usage: '<amount>',
    execute(message,args){
        console.log(args[0])
        let amount =parseInt(args[0])
        if(amount<2 ||amount >100){
            return message.reply('What the fuck are you doing? Please enter a value between 2 and 100')
        }
        if(isNaN(amount)){
            return message.reply('The fuck you think you are doing! Just enter a number')
        }
        message.channel.bulkDelete(amount+1,true).catch(err =>message.reply('The messages are older than 2 Weeks'))
    }
}