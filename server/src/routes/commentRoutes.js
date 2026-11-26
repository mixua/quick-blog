import express from 'express'
import { addComment, getBlogComments } from '../controllers/blogController.js'
import { commentLimiter } from '../middleware/rateLimiter.js'
import { validateComment } from '../validators/blogValidator.js'

const commentRouter = express.Router()

commentRouter.post('/add', commentLimiter, validateComment, addComment)
commentRouter.get('/blog/:blogId', getBlogComments)

export default commentRouter
