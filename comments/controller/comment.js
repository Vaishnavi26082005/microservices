import {randomBytes} from "crypto";
import { commentsDB } from "../db/index.js";

export const createComment=(req,res)=>{
  const commentId=randomBytes(4).toString('hex');
  const {text}=req.body;
  const snippetId=req.params.id;
  const comments=commentsDB[snippetId]||[];
  //create comment

  comments.push({commentId,text});
  commentsDB[snippetId]=comments;
  return res.status(201).json({
    success:"true",
    comment:{commentId,text}

  })
}

export const getCommentBySnippetById=(req,res)=>{
    const snippetId=req.params.id;

return res.status(200).json(
  commentsDB[snippetId]||[]
    
)
}