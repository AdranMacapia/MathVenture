import { client } from "../../../../sanity/lib/client";
import { z } from "zod";
import { Feedback } from "sanity.types";
import { serverBaseUrl } from "@/lib/utils";

const CreateSanityUserSchema = z.object({
  feedbackType: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
  timestamp: z.number().optional().nullable(),
});

type FeedbackInfo = z.infer<typeof CreateSanityUserSchema>;

const createFeedBackMessage = async (feedback?: FeedbackInfo) => {
  try {
    return await client.create<
      Pick<Feedback, "feedbackType" | "message" | "date">
    >({
      _type: "feedback",
      feedbackType: feedback?.feedbackType || "",
      message: feedback?.message || "",
      date: new Date(feedback?.timestamp || Date.now()).toString(),
    });
  } catch (error) {
    // @ts-ignore
    return error;
  }
};

export async function POST(request: Request) {
  const res = await request.json();

  const details = CreateSanityUserSchema.parse(res);

  try {
    await createFeedBackMessage(details);

    return Response.json({
      message: `Feedback added successfully`,
      headers: {
        "Access-Control-Allow-Origin": serverBaseUrl,
        "Access-Control-Allow-Methods": "GET",
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
