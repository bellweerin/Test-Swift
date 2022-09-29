let axios = require("axios")
let nodemailer = require("nodemailer")



// class Test{
//     async getData() {
//         try {
//             let request = await axios.get("http://3.1.189.234:8091/data/ttntest")
//             let data = request.data
//             return data
//         } catch (error) {
//             return error
//         }
//     }
//     async max() {
//         let data = await this.getData()
//         let arr = Object.values(data)
//         console.log(arr)
//         // Math.max.apply(data);
//     }

// }

async function getData() {
    try {
        let request =  await axios.get("http://3.1.189.234:8091/data/ttntest")
        let data = request.data
        // console.log(data)
        return data
    } catch (error) {
        return error
    }
}



function min(data) {
    let min = Math.min.apply(Math, data.map(function (o) { return o.data; }));
    return min

}
function max(data) {
    let max = Math.max.apply(Math, data.map(function (o) { return o.data; }));
    return max
}
function avg(data) {
    let sum = data.map(function (o) { return o.data; }).reduce((a, b) => a + b, 0)
    // console.log(data.length)
    let avg = sum / data.length
   
    return avg
}

// let arr = Object.values(data)
//     let min = Math.min(arr)
    

async function main() {
    let data = await getData()
    console.log(min(data))
    console.log(max(data))
    console.log(avg(data))
    // console.log(max(data))

    
    
}



// let data = getData()
main()



    
// }
// function max(data) {
    
// }
// function avg(data) {
    
// }
getData()
// console.log(getData())






// getData()

module.exports = { getData, min, main}








