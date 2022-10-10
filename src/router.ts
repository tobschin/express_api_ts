import express, {Request, Response, Router} from 'express';
import Cat from './cat'

let router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json({message: 'im on fire'})
})

router.post('/', (req: Request, res: Response) => {
  let cat: Cat = {...req.body}
  res.json(cat)
})

export default router;
