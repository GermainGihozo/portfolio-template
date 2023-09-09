import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({ message: "Muslim will reply in 3 hours." })
  );
};
