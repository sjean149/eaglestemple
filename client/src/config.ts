// Base URL of the Express API. Set VITE_API_URL in production (e.g. on Render).
export const API_URL = (import.meta.env.VITE_API_URL ?? "http://localhost:5000").replace(/\/$/, "");
