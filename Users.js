import express from 'express';

import { getusers, createuser, getuser, deleteuser, updateuser } from '../controllers/Users.js';


const router = express.Router();


router.get('/', getusers);


router.post('/', createuser);


router.get('/:id', getuser);

router.delete('/:id', deleteuser);

router.patch('/:id', updateuser);

export default router;