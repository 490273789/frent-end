const handleMaxValue = (value) => {
  return Math.ceil(value / 100) * 100;
};
console.log("360", handleMaxValue(360));
console.log("18", handleMaxValue(18));
console.log("154", handleMaxValue(154));
console.log("13840", handleMaxValue(13840));

/**
 * 获取canvas绘图上下文
 * @type {[type]}
 */
const canvas = document.getElementById("canvas");
const context = canvas?.getContext("2d");
context.translate(0, 200);

//绘图配置
let options = {
  // [左边的margin，底部的margin，canvas宽度， canvas高度]
  chartZone: [20, 20, 250, 220],
  xMax: 400, // 数据中最大的值
  // x轴的展示的label
  xAxisLabel: ["0", "100", "200", "300", "400"],
  // 数据
  data: [10, 50, 200, 330, 390, 320, 220],
  barStyle: {
    // 可写死在代码中
    // 柱子的高度 - 横向排列高度是写死的
    height: 10,
    // 柱子的颜色
    color: "#1abc9c",
  },
};

drawBarChart(options);

// 要分为几份 - 可以写死
let num = 4;
// 数据最大值 - 接口那
const max = 200;
// 数据的拆分范围
const itemRange = max / num;
// x轴的展示的label
const xAxisLabel = [];
// 从零开始
let item = 0;
while (num-- >= 0) {
  xAxisLabel.push(item);
  item += itemRange;
}
console.log(xAxisLabel);

/**
 * 绘制柱状图
 */
function drawBarChart(options) {
  // drawAxis(options); //绘制坐标轴
  // drawYLabels(options); //绘制y轴坐标
  drawXLabels(options); //绘制x轴坐标
  drawData(options); //绘制柱状图
  // drawDataGradient(options);//绘制渐变色柱状图
}

/**
 * 绘制坐标轴
 */
// function drawAxis(options) {
//     let chartZone = options.chartZone;
//     // 坐标轴的宽度
//     context.strokeWidth = 4;
//     // 坐标轴的颜色
//     context.strokeStyle = '#353535';
//     context.moveTo(chartZone[0],chartZone[1]); // 坐标轴的起始点
//     context.lineTo(chartZone[0],chartZone[3]); //y轴总高
//     context.lineTo(chartZone[2],chartZone[3]); //x轴总长
//     context.stroke();
// }

/**
 * 绘制x轴坐标
 */
function drawXLabels(options) {
  let labels = options.xAxisLabel;
  // x轴的长度：canvas的长度 - 左边距
  let xLength = options.chartZone[2] - options.chartZone[0];
  // x轴坐标的间隙：x轴长度 / (左边的数量 - 1)
  let gap = xLength / (labels.length - 1);

  labels.forEach(function (label, index) {
    //绘制坐标文字
    let offset = context.measureText(label).width;
    console.log("offset:", offset);
    // 坐标文字的颜色
    context.strokeStyle = "#eaeaea";
    // 坐标文字的大小
    context.font = "18px";
    // 参数：text, x , y
    context.fillText(
      label,
      options.chartZone[0] + index * gap - offset / 2,
      options.chartZone[1] - 5,
    );
    //绘制辅助线
    context.beginPath();
    // 辅助线颜色
    context.strokeStyle = "#eaeaea";
    // 辅助线宽度
    // context.strokeWidth = 2;
    // 辅助线起始坐标
    context.moveTo(options.chartZone[0] + index * gap, options.chartZone[3]);
    // 辅助线终止坐标
    context.lineTo(options.chartZone[0] + index * gap, options.chartZone[1]);
    // 绘制辅助线
    context.stroke();
  });
}

/**
 * 绘制数据
 */
function drawData(options) {
  let data = options.data;
  // x轴的长度
  let xLength = (options.chartZone[2] - options.chartZone[0]) * 0.96;
  // y轴的高度
  let yLength = (options.chartZone[3] - options.chartZone[1]) * 0.98;
  // 柱子间的空隙
  let gap = yLength / data.length;

  //绘制矩形
  data.forEach(function (item, index) {
    // 柱子的颜色
    context.fillStyle = options.barStyle.color || "#1abc9c"; //02BAD4
    // 柱子的高度
    let height = options.barStyle.height;
    // 柱子的宽度，当前值 / 数据中的最大值 = 这条数据的百分比   乘坐标轴的长度 就是显示柱子的长度
    // 横向展示 with是柱子的长度
    let width = (item / options.xAxisLabel[options.xAxisLabel.length - 1]) * xLength;
    // 柱子的x轴起始点坐标
    let x0 = options.chartZone[0];
    // 柱子的y轴起始点坐标
    let y0 = options.chartZone[0] + (index + 1) * gap - options.barStyle.height / 2;
    // 绘制柱子（x, y, 宽度, 高度）
    context.fillRect(x0, y0, width, height);
    // 绘制Label
    // 设置Label的颜色
    context.fillStyle = "#000000";
    // 设置Label的字体样式
    context.font = "12px Arial";
    // 绘制label（text, x, y）
    context.fillText(item, x0, y0 - 1);
  });
}
