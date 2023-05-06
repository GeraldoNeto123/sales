import { Request, Response, NextFunction } from "express";

export default function filesPayloadExists(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (!request.files)
    return response.status(400).json({ error: "Missing files" });

  next();
}
