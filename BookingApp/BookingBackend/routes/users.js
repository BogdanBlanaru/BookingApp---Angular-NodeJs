import express from 'express';
import {
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res) => {
// 	res.send('Hello user, you are logged in!');
// });

// router.get('/checkUser/:id', verifyUser, (req, res) => {
// 	res.send('Hello user, you are logged in and you can delete your account!');
// });

// router.get('/checkAdmin/:id', verifyAdmin, (req, res) => {
// 	res.send(
// 		'Hello user, you are admin, you are logged in and you can delete your account!'
// 	);
// });

router.put('/:id', verifyUser, updateUser);

router.delete('/:id', verifyUser, deleteUser);

router.get('/:id', verifyUser, getUser);

router.get('/', verifyAdmin, getUsers);

export default router;
