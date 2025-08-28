import express from 'express'
import commentRouter from "./routes/comment.js"


const app= express();


app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/snippet",commentRouter);

const PORT=1000;

app.listen (PORT,()=>{
    console.log(`server listen at ${PORT}`)
}

)