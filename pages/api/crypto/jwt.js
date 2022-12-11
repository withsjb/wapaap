import React from "react";
const SECRET = process.env.JWT_SECRET;

export default function handler(req, res) {
  const username = req.body.username;

  const token = jwt.sign({ username }, SECRET, { expiresIn: "id" });

  res.status(200).json({ token: token });
}
