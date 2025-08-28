import express from 'express'
import { createSnippet, getSnippet } from '../controller/snippet.js';
const router =express.Router();

router.post("/",createSnippet)
router.get("/snippets",getSnippet)

export default router;
