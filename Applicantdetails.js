import express from 'express';

import { getapplicants, createapplicant, getApplicantById, deleteapplicant, updateapplicant} from '../controllers/applicantdetails.js';


const router = express.Router();


router.get('/', getapplicants);


router.post('/', createapplicant);


router.get('/applicants/:id', getApplicantById);

router.delete('/applicants/:id', deleteapplicant);

router.patch('/applicants/:id', updateapplicant);

export default router;