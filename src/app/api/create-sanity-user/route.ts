import { client } from "../../../../sanity/lib/client";
import { z } from "zod";
import { User } from "sanity.types";

const CreateSanityUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  clerkId: z.string().optional(),
});

type UserInfo = z.infer<typeof CreateSanityUserSchema>;

const addUserToSanity = async (user?: UserInfo) => {
  try {
    return await client.create<Pick<User, "fullName" | "email" | "clerkID">>({
      _type: "user",
      fullName: `${user?.firstName} ${user?.lastName}`,
      email: user?.email || "",
      clerkID: user?.clerkId || "",
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
    await addUserToSanity(details);

    return Response.json({
      message: `User added to sanity successfully`,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
