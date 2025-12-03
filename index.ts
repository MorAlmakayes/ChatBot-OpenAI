import concurrently from "concurrently";
import { cwd } from "process";

concurrently([
  {
    name: "server",
    command: "bun run dev",
    cwd: "packages/server",
    prefixColor: "blue",
  },
  {
    name: "client",
    command: "bun run dev",
    cwd: "packages/client",
    prefixColor: "green",
  },
]);
