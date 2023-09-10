import Host from "./host";

let host: any;

beforeEach(() => {
  host = new Host();
});

describe("Host Test", () => {
  test("Should greet a stranger", () => {
    expect(host.greet()).toBe("Hello Stranger");
  });

  test("Should greet a named person", () => {
    expect(host.greet("John")).toBe("Hello John");
  });

  test("Should bid a stranger farewell", () => {
    expect(host.farewell()).toBe("Goodbye Stranger");
  });

  test("Should bid a named person farewell", () => {
    expect(host.farewell("Mitchel")).toBe("Goodbye Mitchel");
  });
})

