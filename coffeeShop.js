let coffeeShop = {
    branch:"costa",
    drinkslist: ["coffee", 2.50, "Tea", 1.50],
    foodlist: ["cake", 3.00, "Croissant", 2.50],
    drinksOrdered(drink){

    let total = 0;

    for (let i=0; i < drink.length; i++){
         let indexOfitem =this.drinkslist.indexOf(drink[i])
    
        if (indexOfitem !== -1){
       total+= this.drinkslist [indexOfitem +1]
       console.log(`${drink[i]} £${this.drinkslist[indexOfitem +1].toFixed(2)}`)
        }
    
    
    }
           console.log(`\nTotal: £${total.toFixed(2)}`)

    }
    
}
coffeeShop.drinksOrdered(["coffee", "Tea", "coffee"])

// let coffeeShop = {
//     branch: "costa",
//     menu:{
//         coffee:2,
//         Tea: 1.5,
//         cake: 4
//     },
//     order(orderedItems){
//         let total = 0;
//     console.log(`${this.branch} receipt\n`)
//         for (const item of orderedItems)
//         {
//         if(this.menu[item] !== undefined)   
//             total +=this.menu[item]
//         console.log(item, this.menu[item])}
//         else{ 
//             console.log(`Sorry, we don't serve this ${it}`)}

//         }
        
    
// }
//  coffeeShop.Order(["coffee", "Tea", "cake"])
