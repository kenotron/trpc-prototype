import { getClient } from "./client.js";

async function main() {
  try {
    const response = await getClient().files.openInVsCode.query({
      rootPath: "rootPath",
      relativePath: "relativePath",
      line: 15,
      column: 1,
    });

    console.dir(response);
  } catch (error) {
    console.error("ERROR: ", error);
  }
}

main();
