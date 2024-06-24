const getPowerRandom = () => Math.max(Math.random(), Math.random());

const testPowerRandom = (k) => {
  const times = 10000;
  let count = 0;
  for (let i = 0; i < times; i++) {
    if (getPowerRandom() < k) count++;
  }
  console.log("[ getPowerRandom() ] >", count / times);
  console.log("[ getPowerRandom ] >", Math.pow(k, 2));
};

testPowerRandom(0.7);