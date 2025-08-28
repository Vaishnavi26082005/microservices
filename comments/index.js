import express from 'express'
const app= express();

const PORT=1000;
app.listen (PORT,()=>{
    console.log(`server listen at ${PORT}`)
}

)