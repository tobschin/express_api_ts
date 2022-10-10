import express, { Request, Response, Router } from 'express';
let router : Router = express.Router()

router.get('/', (req : Request, res : Response)=> {
    res.json({message: 'im on fire'})
})

export default router;