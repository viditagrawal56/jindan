import { Vonage } from "@vonage/server-sdk";
import { Auth } from "@vonage/auth";

const auth = new Auth({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
});

const vonage = new Vonage(auth);

export async function POST(request: Request) {
  try {
    const { to, from, text } = await request.json();
    const response = await vonage.sms.send({ to, from, text });
    console.log("Message sent successfully");
    return new Response(JSON.stringify({ status: "success", data: response }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.log("There was an error sending the message.");
    console.error(error);
    return new Response(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
