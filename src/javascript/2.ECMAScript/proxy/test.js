const obj = {
  name: "wsn",
  hobby: ["football"],
  family: [{ name: "wsr", age: 10 }],
  child: { sex: "男" },
};

const proxy = new Proxy(obj, {
  get(target, prop) {
    console.log("target:", target);
    console.log("prop:", prop);
    return Reflect.get(target, prop);
  },
  set(target, prop) {
    console.log("target", target);
    console.log("prop:", prop);
    return Reflect.set(target, prop);
  },
});

// proxy.name;
// proxy.child.sex;
// proxy.family[0].name;
proxy.child.sex = "女";
console.log(proxy);
