import { execSync } from "child_process";
import path from "path";

const STORAGE_PATH = path.resolve(
  process.env.HOME || "",
  ".safeenv/storage.json"
);

const main = async () => {
  const file = Bun.file(STORAGE_PATH);
  const text = await file.text();
  console.log(text);


  execSync("bun test.ts", { stdio: "inherit", env: process.env });
};

main();
