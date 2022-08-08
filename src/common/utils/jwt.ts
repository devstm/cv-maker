import * as jwt from 'jsonwebtoken';
import { SYSTEM } from '../constants/general';

export const verifyToken = (token, secret) =>
  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      return false;
    }
    return decode;
  });

export const generateToken = (username: string) => {
  return jwt.sign({ username }, SYSTEM.SECRET, {
    expiresIn: '8h',
  });
};
