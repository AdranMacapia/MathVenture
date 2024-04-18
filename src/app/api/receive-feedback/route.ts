import { client } from "../../../../sanity/lib/client";
import { z } from "zod";
import { Feedback } from "sanity.types";

const CreateSanityUserSchema = z.object({
  feedbackType: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
  timestamp: z.number(),
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
      date: feedback?.timestamp ? new Date(feedback?.timestamp).toString() : "",
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
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
