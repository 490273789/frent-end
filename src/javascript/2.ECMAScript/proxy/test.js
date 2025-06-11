const obj = {
  name: "wsn",
  hobby: ["football"],
  family: [{ name: "wsr", age: 10 }],
  child: { sex: "男" },
};

const proxy = new Proxy(obj, {
  get(target, prop) {
    console.log("get-prop:", prop);
    return Reflect.get(target, prop);
  },
  set(target, prop) {
    console.log("set-prop:", prop);
    return Reflect.set(target, prop);
  },
});

// proxy.name;
// proxy.child.sex;
proxy.family[0].name = "wsr1";
const name = proxy.family[0].name;
proxy.child.sex = "女";
console.log(name);
