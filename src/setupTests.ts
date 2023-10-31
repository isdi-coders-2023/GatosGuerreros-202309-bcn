import { afterEach } from "vitest";
import "jest-styled-components";
import "styled-components";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});
