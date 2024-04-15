import { describe, it, expect } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
