## Serving the static files with Express
The express code
```javascript
import express from "express";
import path from "path";
import { fileURLToPath } from "url";


const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set ejs as view engine
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"));
// include static files
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req,res) => {
    res.render("index",{App:'Cine Friend'})
})
app.listen(port, ()=>{
    console.log(`App live at http://localhost:${3000}`)
})
```
The html code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/output.css">
    <title><%= App %></title>
</head>
<body>
    <div class="main flex flex-col justify-center items-center h-[100vh] w-full">
        <h1><%= App %></h1>
        <div class="inputbar">
            <input class="" type="text">
        </div>
        <button>Analyse</button>
    </div>  
</body>
</html>
```