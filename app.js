let express = require("express")
let index_routes = require("./routes/index")
let app = express()

app.use(express.json())

app.use(function (err, req, res, next) {
  
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

console.log(app)


module.exports = app