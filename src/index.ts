type Foo = {
  bar: Array<number>;
};

type Bar = Partial<Foo>;
// add a new feature for testing
type Boo = Foo["bar"];

const MAP: Record<string, unknown> = {
  foo: "bar",
};

console.log("Foo", MAP, {} as typeof MAP);
