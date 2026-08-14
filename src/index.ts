// R4C3-666AX — clean-room racing. Deterministic by construction.
// Inspiration (mechanics only, not source material): racing conventions (lap, drift, split times)
// Target engine for the render layer: three-js (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { TrackSegments, DriftPhysics, SplitClock } from "./archetype";

export const SPEC = "racing conventions (lap, drift, split times)";
export const MODULES = [{ id: "TrackSegments", name: "R4C3-666AX :: TrackSegments" }, { id: "DriftPhysics", name: "R4C3-666AX :: DriftPhysics" }, { id: "SplitClock", name: "R4C3-666AX :: SplitClock" }];
export { seededRandom };
