// translate.js
/**
 * 左右滑动函数
 * @param {HTML Object} el 目标节点
 * @param {number} x 水平移动的方向
 * @param {number} y 竖直移动的方向
 * @param {Object} options 可选参数
 * @param {Boolean} options.userTransform 是否通过transform来移动元素
 * @param {Boolean} options.transitionTimingFunction transition的timingFunction
 * @param {String} options.transitionDuration transition时间
 */

 export function translate(el, x=0, y=0, options) {
   if(!el) return
   const defaultOptions = {
    userTransform: true,
    transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    transitionDuration: '0s'
   }
   for(let option in options) {
     defaultOptions[option] = options[option];
   }
   if(defaultOptions.userTransform) {
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`; 
    el.style.transitionProperty = 'transform';
    el.style.transtionDuration = defaultOptions.transitionDuration;
    el.style.transitionTimingFunction = defaultOptions.transitionTimingFunction;
   } else {
     el.style.left = x;
     el.style.top = y;
   }
 }