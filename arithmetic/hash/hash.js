// 哈希算法
const addHash = (key) => {
  let hash = 0;
  const MODULES = 1000_000_007;
  for (const c of key) {
    hash = (hash + c.charCodeAt(0)) % MODULES;
  }
  return hash;
};

// 乘法哈希
const mulHash = (key) => {
  let hash = 0;
  const MODULUS = 1000000007;
  for (const c of key) {
    hash = (31 * hash + c.charCodeAt(0)) % MODULUS;
  }
  return hash;
};

// 异或哈希
const xorHash = (key) => {
  let hash = 0;
  const MODULUS = 1000000007;
  for (const c of key) {
    hash ^= c.charCodeAt(0);
  }
  return hash & MODULUS;
};

// 旋转哈希
const rotHash = (key) => {
  let hash = 0;
  const MODULUS = 1000000007;
  for (const c of key) {
    hash = ((hash << 4) ^ (hash >> 28) ^ c.charCodeAt(0)) % MODULUS;
  }
  return hash;
};

const key = "100";
for (const k of key) {
  console.log(k);
  console.log(k.charCodeAt(0));
}
console.log(key.charCodeAt(0));
console.log(key.charCodeAt(1));
console.log(key.charCodeAt(2));
