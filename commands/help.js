// Help fn 
let clk = require('chalk');

function helpFn() {
    console.log(clk.cyan(`
    List of All the commands:
                super tree "directoryPath"
                super organize "directoryPath"
                super main.js help
                `));
}
module.exports={
    helpKey: helpFn
}