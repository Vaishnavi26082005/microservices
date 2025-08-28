import express from 'express'
import snippetRouter from '../snippet/routes/snippet.js';
import cors from 'cors'
const app= express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use("/api/v1/snippet",snippetRouter);

const PORT=8000;
app.listen (PORT,()=>{
    console.log(`server listen at ${PORT}`)
}

)