import {TestComponent} from './test.component'

describe('Test Component', () => {
  let testComponent: TestComponent;

  beforeEach(() => {
    testComponent = new TestComponent();
  });
  it("Increment counter by incrementer", () => {
    testComponent.inc();
    expect(testComponent.counter).toBe(1);

  });
  it("Increment counter by incrementer", () => {
    testComponent.inc(5);
    expect(testComponent.counter).toBe(5);

  })
});
describe('Test Component 2', () => {
  let testComponent: TestComponent;

  beforeEach(() => {
    testComponent = new TestComponent();
    testComponent.counter = 15
  });
  it("Increment counter by incrementer", () => {
    testComponent.inc();
    expect(testComponent.counter).toBe(16);
  });
  it("Increment counter by incrementer", () => {
    testComponent.inc(5);
    expect(testComponent.counter).toBe(20);

  })

  it("Should check EventEmitter", () => {
      let result = null;
      testComponent.countEmitter.subscribe(v=>result = v)

    expect(result).toBe(0);
  })
});

