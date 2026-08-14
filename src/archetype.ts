export class TrackSegments {
  constructor(private readonly total = 10) {}
  lap(segments: number): boolean { return segments >= this.total; }
  remaining(segments: number): number { return Math.max(0, this.total - segments); }
}
export class DriftPhysics {
  drift = 0;
  steer(input: number, speed: number): void { this.drift = Math.max(-1, Math.min(1, input * (speed > 3 ? 0.4 : 0.1))); }
}
export class SplitClock {
  constructor(private t = 0) {}
  tick(dt = 1): void { this.t += dt; }
  time(): number { return this.t; }
}