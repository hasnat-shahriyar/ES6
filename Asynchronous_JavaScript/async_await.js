// Our Items
let stocks = {
    Fruits: ['Strawberry 🍓', 'Grapes 🍇', 'Banana 🍌', 'Apple 🍎'],
    liquid : ["water 🌊", "ice 🍧"],
    holder : ["cone 🍦", "cup 🥤", "stick 🍡"],
    toppings : ["chocolate 🍫", "peanuts 🥜"],
}

let is_shop_open = true;

let time = ms => {
    return new Promise ( (resolve, reject) =>{
        if (is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            
        }
    })
}

let kitchen = async () => {
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected as the fruit choice!`);

        await time(0);
        console.log('🔪 The fruit has been sliced and diced.')

        await time(1000);
        console.log(`🌊 ${stocks.liquid[0]} and 🍇 ${stocks.Fruits[1]} have been added to the mix.`)

        await time(1000);
        console.log('⚙️ The ice cream machine is now running.')

        await time(2000);
        console.log(`🍦 The ice cream is being placed in a ${stocks.holder[0]}.`);

        await time(2000);
        console.log(`🍫 Delicious ${stocks.toppings[0]} has been sprinkled on top.`)

        await time(3000);
        console.log('🍨 Your ice cream is ready to be served! Enjoy!')
    }
    catch(error){
        console.log('Customer left', error);
    }
    finally{
        await time(5000)
        console.log(`After 5pm the shop gets closed. Please return tomorrow.`);
    }
}

kitchen();