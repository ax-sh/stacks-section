import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

// vi.mock('zustand'); // to make it works like `Jest` (auto-mocking)
afterEach(() => {
  cleanup();
});
