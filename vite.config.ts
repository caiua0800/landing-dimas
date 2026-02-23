import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Removido qualquer menção ao plugin-react-swc para evitar conflitos
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // Mapeia o caractere @ para a pasta src
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Garante que o servidor limpe o cache de dependências se houver erro de otimização
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});