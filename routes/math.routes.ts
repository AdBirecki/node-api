import * as express from 'express';
import { MathLogic, MyLogic } from '../modules';
import DiContainer from '../injection/container';


const diContainer = new DiContainer();
diContainer.register('MyLogic', new MyLogic());
diContainer.register('MathLogic', new MathLogic());

const router = express.Router();

router.get('/math/:id', (req, res) => {
    const myLogic: MyLogic = diContainer.get('MyLogic');
    const id = req.params.id;
    const addition = myLogic.Add(id, id);
    res.status(200).json({ addition });
});

export const mathRoutes = router;