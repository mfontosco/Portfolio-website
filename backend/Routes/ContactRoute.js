import express from 'express'
import { contactAdmin } from '../Controller/ContactController.js'
const router = express()

router.post('/',contactAdmin)

export default router