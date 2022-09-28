let axios = require("axios")

DataController = {}

DataController.get = async (req, res) => {
    try {
        let request = await axios.get("http://3.1.189.234:8091/data/ttntest")
        let data = request.data
        res.json(data)   
        
    } catch (error) {
        res.json(error);
    }
}
DataController.min = async (req, res) => {
    try {
       
    } catch (error) {
       
    }
}
DataController.all = a

DataController.predict = async (req, res) => {
    try {

        
    } catch (error) {
        
    }
}



async function getData() {
    let request = await axios.get("http://3.1.189.234:8091/data/ttntest")
    console.log(request)

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







module.exports = DataController


