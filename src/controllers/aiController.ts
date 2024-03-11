import OpenAI from "openai";
// import payload from "payload";

require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const aiController = async (req: any, res, next) => {
  try {
    // const posts = await payload.find({
    //   collection: "posts",
    //   // Set `overrideAccess` to `false` to ensure that access control is enforced
    //   overrideAccess: false,
    //   // Pass `user` object to use against access control checks
    //   user: req.user,
    // });

    // const postContent = JSON.stringify(posts.docs[0].content);

    // const completion = await openai.chat.completions.create({
    //   messages: [
    //     { role: "system", content: `Summarize this post. ${postContent}` },
    //   ],
    //   model: "gpt-4-1106-preview",
    // });

    const content = req.query.content;

    if (!content) {
      return res.status(400).send("No message provided");
    }

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: content }],
      model: "gpt-4-0125-preview",
    });

    console.log(completion.choices[0]);

    const response = completion.choices[0].message.content;

    return res.send(response);
  } catch (error: any) {
    console.error(error);

    return next(error);
  }
};

export default aiController;
