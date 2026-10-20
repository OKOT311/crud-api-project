import express from 'express';

import { getdepts, createdept, getdept, deletedept, updatedept } from '../controllers/Depts.js';


const router = express.Router();


router.get('/', getdepts);


router.post('/', createdept);


router.get('/:id', getdept);

router.delete('/:id', deletedept);

router.patch('/:id', updatedept);

export default router;