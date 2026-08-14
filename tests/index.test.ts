import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { TrackSegments, DriftPhysics, SplitClock } from "../src/archetype";

describe("R4C3-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(3);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const tr = new TrackSegments(10);
expect(tr.lap(10)).toBe(true);
expect(tr.remaining(4)).toBe(6);
const d = new DriftPhysics();
d.steer(1, 5);
expect(d.drift).toBe(0.4);
const sc = new SplitClock();
sc.tick(2);
sc.tick(3);
expect(sc.time()).toBe(5);
  });
});
