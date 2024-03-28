import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async(req, res) => {
    const {userId, prompt, tag} = await req.json();

    // return new Response(JSON.stringify(userId), { status: 201 })
    // return new Response("Hello, Next.js!", {
    //     status: 200,
    //   });

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 , error: error.message});
    }
}