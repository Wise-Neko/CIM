import express  from 'express';

import { getData, createData, updateData, deleteData } from '../controllers/data.js';

const router = express.Router();

router.get('/', getData);
router.post('/', createData);
router.get('/:id', getData);
router.patch('/:id', updateData);
router.delete('/:id', deleteData);

export default router;