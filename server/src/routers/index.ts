import { router } from "../trpc.js";
import { fileRouter } from "./files.js";

export const appRouter = router({
  files: fileRouter,
});

export type AppRouter = typeof appRouter;
