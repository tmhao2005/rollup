const Foo = (fx: Function) => {
  console.log(fx);
};

@Foo
export class Bar {}
