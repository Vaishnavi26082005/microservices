import express from 'express'
import { createComment, getCommentBySnippetById } from '../controller/comment.js';

const router = express.Router();

router.post("/:id/comment",createComment)
router.get("/:id/comment",getCommentBySnippetById);

export default router;
