import * as express from 'express';
import { MyLogic } from "../modules";
import DiContainer from '../injection/container';



const router = express.Router();
const diContainer: DiContainer = express.application.get('diContainer');

router.get('/math/:id', (req, res) => {
    const myLogic: MyLogic = diContainer.get('MyLogic');
    const id = req.params.id;
    const addition = myLogic.Add(id, id);
    res.status(200).json({ addition });
});

export const mathRoutes = router;