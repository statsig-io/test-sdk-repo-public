type Foo = {
  bar: Array<number>;
};

type Bar = Partial<Foo>;

type Boo = Foo["bar"];

const MAP: Record<string, unknown> = {
  foo: "bar",
};

console.log("Foo", MAP, {} as typeof MAP);
