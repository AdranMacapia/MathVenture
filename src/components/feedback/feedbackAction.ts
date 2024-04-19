"use server";

import { baseUrl } from "@/lib/utils";
import { z } from "zod";

const feedbackSchema = z.object({
  message: z.string(),
  feedbackType: z.string(),
});

type Status = "success" | "error";

export const feedbackAction = async (prevState: any, formData: FormData) => {
  const details = feedbackSchema.parse({
    message: formData.get("message"),
    feedbackType: formData.get("feedbackType"),
  });

  try {
    await fetch(`${baseUrl}/api/receive-feedback`, {
      method: "POST",
      body: JSON.stringify(details),
    });

    return {
      status: "success" as Status,
      message: "Thanks for the feedback 🙂",
    };
  } catch (error) {
    return {
      status: "error" as Status,
      message: "Something happened sorry",
    };
  }
};
