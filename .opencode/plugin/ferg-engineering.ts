import type { Plugin } from "@opencode-ai/plugin"
import { tool } from "@opencode-ai/plugin"

export default (async (ctx) => {
  console.log("🔧 Ferg Engineering System loaded")
  
  return {
    // Add custom tools here
    tool: {
      // Example tool structure:
      // myTool: tool({
      //   description: "Description of the tool",
      //   args: {
      //     param: tool.schema.string().describe("parameter description"),
      //   },
      //   async execute(args) {
      //     return "result";
      //   },
      // }),
    },
  };
}) satisfies Plugin
