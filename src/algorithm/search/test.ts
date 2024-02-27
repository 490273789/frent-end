import { binarySearch } from "./binarySearch";
import { sequentSearch } from "./sequentSearch";

const MAX_LENGTH = 10000000;
const array = new Array(MAX_LENGTH).fill(0).map((_, index) => index);
const target = 9999999;

const startTime = performance.now();
// const index = binarySearch(array, target); // 索引： 9999999 消耗时间： 0.0765829998999834
const index = sequentSearch(array, target); // 索引： 9999999 消耗时间： 8.4702079994604
const endTime = performance.now();

console.log("索引：", index, "消耗时间：", endTime - startTime);
