import { testRunner } from "./testRunner";
import "chai/register-should";

describe("testRunner", () => {
  it("pass", () => {
    expect(testRunner("const a = 5", ["a.should.equal(5)"])).toEqual([
      { res: true },
    ]);
  });
  it("fail", () => {
    const res = testRunner("const a = 6", ["a.should.equal(5)"]);
    for (const r of res) {
      expect(r.res).toBe(false);
    }
  });
  it("syntax error", () => {
    const res = testRunner("dfgh", ["a.should.equal(5)"]);
    for (const r of res) {
      expect(r.res).toBe(false);
    }
  });
});
