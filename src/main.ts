import { METADATA } from "./constant.ts";
import { bootstrap } from "./index.ts";
import { error, log } from "./utils/logger.ts";

bootstrap("姫野星奏、最高！").then(() => {
  log("Hello from himenosena's lover!");
  log(
    "If you like this, please give me a star on GitHub~: https://github.com/biyuehu/HimenoSena",
  );
  log(
    `Messages list last upated: ${
      METADATA.lastUpdated === 0
        ? "Unknown"
        : new Date(METADATA.lastUpdated).toLocaleString()
    }`,
  );
}).catch((err) => {
  error(err.message);
});
