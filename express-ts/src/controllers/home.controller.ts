import { Request, Response } from 'express';

export function welcome(req: Request, res: Response) {
    res.status(200).send('Welcome to SherryLinks!');
}