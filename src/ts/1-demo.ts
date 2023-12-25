type Watcher<T> = {
  on<K extends keyof T & string>(
    eventName: `${K}Change`,
    callback: (oldValue: T[K], newValue: T[K]) => void,
  ): void;
};

declare function watch<T>(obj: T): Watcher<T>;

const personWatcher = watch({
  firstName: "b",
  lastName: "a",
  age: 10,
});

personWatcher.on("firstNameChange", (oldValue, newValue) =>
  console.log("value", newValue, oldValue),
);
