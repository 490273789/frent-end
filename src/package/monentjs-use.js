import moment from "moment";

const F1 = "YYYY-MM-DD";

const today = moment();

console.log("[ today ] >", today.format(F1));

today.add(1, "day");

console.log("[ today ] >", today.format(F1));

export default {};
