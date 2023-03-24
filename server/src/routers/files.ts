import path from "path";
import { router, procedure } from "../trpc.js";
import { z } from "zod";

export const fileRouter = router({
  openInVsCode: procedure
    .input(
      z.object({
        rootPath: z.string(),
        relativePath: z.string(),
        line: z.number(),
        column: z.number(),
      })
    )
    .query(({ input }) => {
      const { rootPath, relativePath, line, column } = input;
      console.log(
        `I would have opened ${path.resolve(
          rootPath,
          relativePath
        )} in VS Code with line ${line} and column ${column}`
      );

      return {
        success: true,
        openedFile: path.resolve(rootPath, relativePath),
      };
    }),
});
