const express = require('express'); 
const app = express();
const port = /*process.env.PORT || */3000;
const path = require('path');
const hbs = require('hbs');

//public static path
const staticPath= path.join(__dirname, '../public');
const templatePath= path.join(__dirname, '../templates/views');
const partialsPath= path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);


app.use(express.static(staticPath));



app.get("/", (req, res) => {
    res.render("index.hbs")
});

app.get("/about", (req, res) => {
    res.render("about.hbs")
});

app.get("/weather", (req, res) => {
    res.render("weather")
});

app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg: 'Opps! Page NOt Found'
    })
});





app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
})




