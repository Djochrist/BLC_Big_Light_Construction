import { z } from "zod";
import { contactSchema } from "../shared/schema";

export default function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    contactSchema.parse(req.body);
    return res.status(200).json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: err.errors[0]?.message ?? "Invalid input",
        field: err.errors[0]?.path?.join("."),
      });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

