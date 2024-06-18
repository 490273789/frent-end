import dayjs from "dayjs";
// import isSameAndBefore from "dayjs/plugin/isSameAndBefore";

// dayjs.extend(isSameOrBefore);
const F1 = "YYYY-MM-DD";

const today = dayjs();

console.log("[ today ] >", today.format(F1));

today.add(1, "day");

console.log("[ today ] >", today.format(F1));

const day1 = dayjs("2024-01-10");

const day2 = dayjs("2024-01-10");

// console.log("[ day1.isSameAndBefore(day2) ] >", day1.isSameOrBefore(day2));

export {};
