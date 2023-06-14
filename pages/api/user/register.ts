import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/database'
import { User } from '@/models'
import bcrypt from 'bcryptjs';
import { jwt } from '@/utils';

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
            return registerUser(req, res)
        default:
            res.status(400).json({ message: 'Bad request' })
    }
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { email = '', password = '', name = '' } = req.body as { email: string, password: string, name: string };

    if (password.length < 6) return res.status(400).json({ message: 'La contraseña debe de ser 6 caracteres' })
    if (name.length < 2) return res.status(400).json({ message: 'El nombre debe de ser de 2 caracteres' })

    await db.connect();
    const user = await User.findOne({ email });

    if (user) {
        await db.disconnect();
        return res.status(404).json({ message: 'Ese correo ya esta registrado' });
    }

    const newUser = new User({
        email: email.toLocaleLowerCase(),
        password: bcrypt.hashSync(password),
        role: 'client',
        name
    });

    try {
        await newUser.save({ validateBeforeSave: true });
    } catch (error) {
        console.log("🚀 ~ file: register.ts:48 ~ registerUser ~ error:", error)
        return res.status(500).json({ message: "Revisar logs del servidor" })
    }

    const { _id, role } = newUser
    const token = jwt.signToken(_id, email);

    res.status(200).json({ token, user: { email, name, role } })
}
