// Callback Chaining

// Our Items
let stocks = {
    Fruits: ['Strawberry 🍓', 'Grapes 🍇', 'Banana 🍌', 'Apple 🍎'],
    liquid : ["water 🌊", "ice 🍧"],
    holder : ["cone 🍦", "cup 🥤", "stick 🍡"],
    toppings : ["chocolate 🍫", "peanuts 🥜"],
}

// Order Fruit or flavour is selected
const order = (Fruit_Name, callProduction) => {
    setTimeout(() => {
        console.log(`🍓 ${stocks.Fruits[Fruit_Name]} was selected as the fruit choice!`);
        callProduction();
    }, 3000);
}


// But this has become a callback hell. Isn't it?
// So what is the solution for this? Ans: Use Promises

// Now in production
const production = () => {
    setTimeout(() => {
        console.log('🎰 Production has started!');
        setTimeout(() => {
            console.log('🔪 The fruit has been sliced and diced.');
            setTimeout(() => {
                console.log(`🌊 ${stocks.liquid[0]} and 🍇 ${stocks.Fruits[1]} have been added to the mix.`);
                setTimeout(() => {
                    console.log('⚙️ The ice cream machine is now running.');
                    setTimeout(() => {
                        console.log(`🍦 The ice cream is being placed in a ${stocks.holder[0]}.`);
                        setTimeout(() => {
                            console.log(`🍫 Delicious ${stocks.toppings[0]} has been sprinkled on top.`);
                            setTimeout(() => {
                                console.log('🍨 Your ice cream is ready to be served! Enjoy!');
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
}

order(0, production);
