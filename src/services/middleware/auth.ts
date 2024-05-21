import { loginAdmin } from "../repo/AuthAdmin";
import { Request, Response, NextFunction } from "express";
import type { NextApiRequest, NextApiResponse } from 'next';

interface AuthMiddlewareOptions {
  whitelistedMethods?: string[];
}

interface NumberPassword {
  PhoneNo: number;
  Password: string;
}

export const authMiddleware = (
  options: AuthMiddlewareOptions = {}
) => async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, 'url:', req.url, 'token:', req.headers.authorization);
  const whitelistedMethods = options.whitelistedMethods || [];

  if (whitelistedMethods.includes(req.method)) {
    await next();
  } else {
    try {
      const { PhoneNo, Password } = getNumberPassword(req);
      await loginAdmin(PhoneNo, Password);
      await next();
      console.log('login success');
    } catch (error) {
      res.status(401).json({ message: "error login" });
    }
  }
};

const getNumberPassword = (req: Request): NumberPassword => {
  let authHeader = req.headers.authorization?.replace("Basic ", "");
  if (!authHeader) return { PhoneNo: 0, Password: "" };
  let data = Buffer.from(authHeader, "base64").toString("ascii").split(":");
  return { PhoneNo: parseInt(data[0]), Password: data[1] };
};