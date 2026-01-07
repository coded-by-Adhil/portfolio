import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";  // Change this line
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
