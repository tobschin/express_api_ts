import express, {Request, Response, Router} from 'express';
import Cat from './cat'
import CatEntity from './model/cat-entity';

const router: Router = express.Router()



router.get('/', async (req: Request, res: Response) => {
  const all = await CatEntity.find();
  res.json(all);
})

router.post('/', async (req: Request, res: Response) => {

  try{  
    const cat: Cat = {...req.body}
    const c = new CatEntity(cat);
    const saved  = await c.save();
    res.json(saved)

  } catch {
    res.status(500)
    res.send('cannot create')
  }
})

export default router;
