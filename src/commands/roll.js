import { roll_dice } from "./dice/index.js";

export const roll = (ctx) =>{
    try {
    const params = ctx.match
    if(!params) ctx.reply(roll_dice(4))
    else{
        let items = params.split(' ');
        const pairs = new Map([['d4', 0], ['d6', 0], ['d8', 0], ['d10', 0], ['d12', 0], ['d20', 0]])
        items.forEach(item=>{
            const ind = item.indexOf('d')
            const dice = item.slice(ind)
            let num = Number(item.slice(0, ind))
            if(!num) num = 1
            if(num < 0) throw Error(`Number of ${dice} rolls cannot be negative`) 
            if(num > 10000) throw Error(`Numbers of ${dice} is too large`)

            if (!pairs.has(dice)){
                throw Error(`Dice ${dice} doesnt exist`)
                
            }
            else{
                let val = pairs.get(dice) + num;
                pairs.set(dice, val)
            }
            console.log('ind=', ind, 'num=', num, 'dice=', dice)
        }) 

        let sum = 0
        for(let [dice,times] of pairs){
            console.log(dice, times)
            if(times){
                for(let i = 0; i<times;i++){
                    sum += roll_dice(Number(dice.slice(1)), true)
                }
            }
        }
        console.log('items=',items,'\n',pairs)
        ctx.reply(`You throw dices. Their sum is ${sum}`)
    }
} catch (error) {
        console.log(error)
        ctx.reply(`Something went wrong. ${error.toString()}`)
}
}