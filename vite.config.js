import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import inject from "@rollup/plugin-inject";
export default defineConfig({
    plugins: [
        inject({
            // => that should be first under plugins array
            $: "jquery",
            jQuery: "jquery",
            include: ["src/**/*.js"], // Restricts injection to files inside "src"
        }),
        vue(),
    ],
    optimizeDeps: {
        include: ['bootstrap-vue-next']
      },
      
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
