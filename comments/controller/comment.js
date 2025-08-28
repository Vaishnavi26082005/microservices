import {randomBytes} from "crypto";
import { commentsDB } from "../db";

export const createComment=(req,res)=>{
  const id=randomBytes(4).toString('hex');
  const {text}=req.body;
  const snippetId=req.param.id;
  const comments=commentsDB[snippetId]||[];
  //create comment
}

export const getCommentBySnippetById=(req,res)=>{
return res.status(200).json({
    
})
}