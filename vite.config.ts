import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ include: ["src"] })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "TarjetaLibrary",
      fileName: "tarjeta-library",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    pool: "threads",
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
