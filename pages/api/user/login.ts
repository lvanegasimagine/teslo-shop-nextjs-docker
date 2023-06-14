import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/database'
import { User } from '@/models'
import bcrypt from 'bcryptjs';

type Data =
    | { message: string }
    | {
        token: string; user: {
            email: string, name: string, role: string
        }
    }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'POST':
            return loginUser(req, res)
        default:
            res.status(400).json({ message: 'Bad request' })
    }
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { email = '', password = '' } = req.body;

    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    if (!user) return res.status(404).json({ message: 'Correo o Contraseña no validos - EMAIL' });

    if (!bcrypt.compareSync(password, user.password!)) return res.status(404).json({ message: 'Correo o Contraseña no validos - PASSWORD' });

    const { role, name } = user;

    res.status(200).json({ token: '', user: { email, name, role } })
}