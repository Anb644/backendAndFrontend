import  express  from "express";

const app = express();

app.get('/',(req, res)=>{

    res.send('Server is ready');
});

app.get('youtube',(req, res)=>{

    res.send('Bhatti Sab');
});

const port= process.env.port || 3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);

});