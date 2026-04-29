import { auth } from "@/app/lib/auth";

import { toNextJsHandler } from "better-auth/next-js";


export const { GET, POST } = toNextJsHandler(auth);
// const handler = toNextJsHandler(auth);

// export const GET = handler.GET;
// export const POST = handler.POST;