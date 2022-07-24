type Tests = string[];
interface TestResult {
  res: boolean;
  error?: any;
}
type TestResults = TestResult[];

export const testRunner = (code: string, tests: Tests): TestResults => {
  return tests.map((test) => {
    const codeWithTest = `
      ${code}
      ${tests[0]}
    `;
    try {
      new Function(codeWithTest)();
      return { res: true };
    } catch (e) {
      return { res: false, error: e };
    }
  });
};
