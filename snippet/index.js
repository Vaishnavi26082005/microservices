import express from 'express'
import snippetRouter from '../snippet/routes/snippet.js';
const app= express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/snippet",snippetRouter);

const PORT=8000;
app.listen (PORT,()=>{
    console.log(`server listen at ${PORT}`)
}

)