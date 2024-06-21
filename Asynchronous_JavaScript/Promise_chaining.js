// Our Items
let stocks = {
    Fruits: ['Strawberry 🍓', 'Grapes 🍇', 'Banana 🍌', 'Apple 🍎'],
    liquid : ["water 🌊", "ice 🍧"],
    holder : ["cone 🍦", "cup 🥤", "stick 🍡"],
    toppings : ["chocolate 🍫", "peanuts 🥜"],
}

let is_shop_open = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log('The shop is closed'));
        }
    });
}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected as the fruit choice!`))

.then(() => {
    return order(0, () => console.log('🎰 Production has started!'));
})

.then(() => {
    return order(2000, () => console.log('🔪 The fruit has been sliced and diced.'));
})

.then(() => {
    return order(1000, () => console.log(`🌊 ${stocks.liquid[0]} and 🍇 ${stocks.Fruits[1]} have been added to the mix.`));
})

.then(() => {
    return order(1000, () => console.log('⚙️ The ice cream machine is now running.'));
})

.then(() => {
    return order(2000, () => console.log(`🍦 The ice cream is being placed in a ${stocks.holder[0]}.`));
})

.then(() => {
    return order(2000, () => console.log(`🍫 Delicious ${stocks.toppings[0]} has been sprinkled on top.`));
})

.then(() => {
    return order(3000, () => console.log('🍨 Your ice cream is ready to be served! Enjoy!'));
})

.catch(() => {
    console.log('Customers left');
})

.finally(() => {
    console.log(`After 5pm the shop gets closed. Please return tomorrow.`);
});
