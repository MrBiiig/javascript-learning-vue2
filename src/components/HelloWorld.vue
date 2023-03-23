<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};

//

// const removeEqual = (arr) => {
//   if (!arr || arr.length < 2) {
//     return arr;
//   }
//   return arr.filter((el, idx) => arr.indexOf(el) === idx);
// };
// console.log(removeEqual([1, 2, 3, 4, 3, 4, 5, 6]));

// const removeEqual2 = (arr) => {
//   const newSet = new Set(arr);
//   return Array.from(newSet);
// };
// console.log(removeEqual2([1, 2, 3, 4, 3, 4, 5, 6]));

// const getArrMax = (arr) => {
//   return Math.min(...arr);
// };
// console.log(getArrMax([32, 5, 7, 4, 4, 45, 312]));

// const genFibArr = (n) => {
//   let fibArr = [];
//   let i = 0;
//   while (i <= n) {
//     if (i <= 1) {
//       fibArr[i] = i;
//     } else {
//       fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
//     }
//     i++;
//   }

//   return fibArr;
// };
// console.log(genFibArr(8));

//xxxx
// const getMaxProfit = (arr) => {
//   let maxProfit = 0;
//   let minVal = arr[0];
//   for (let i = 0, len = arr.length; i < len; i++) {
//     const currentVal = arr[i];
//     minVal = Math.min(currentVal, minVal);

//     const temp = currentVal - minVal;
//     maxProfit = Math.max(temp, maxProfit);
//   }
//   return maxProfit;
// };
// console.log(getMaxProfit([4, 3, 6, 7, 5, 3]));

// const bubbleSort = (arr) => {
//   let temp;
//   for (let i = 0, len = arr.length; i < len; i++) {
//     for (let j = 0; j < len - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };
// console.log(bubbleSort([5, 3, 2, 1, 5, 6]));

// const intersectionFn = (arr1, arr2) => {
//   return arr1.filter((el1) => arr2.some((el2) => el2 === el1));
// };
// console.log(intersectionFn([1, 2, 3, 4], [2, 5, 3, 6]));

// const complementFn = (arr1, arr2) => {
//   return arr1.filter((el1) => arr2.every((el2) => el2 !== el1));
// };
// console.log(complementFn([1, 2, 3, 4], [2, 5, 3, 6]));

// const unionFn = (arr1, arr2) => {
//   return arr1.concat(arr2.filter((el2) => arr1.every((el1) => el1 !== el2)));
// };
// console.log(unionFn([1, 2, 3, 4], [2, 5, 3, 6]));

// const midSearch = (arr, target) => {
//   let left = 0,
//     len = arr.length,
//     right = len - 1;
//   while (left <= right) {
//     let mid = parseInt((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid;
//     } else {
//       right = mid;
//     }
//   }
//   return -1;
// };
// console.log(midSearch([1, 2, 3, 4, 5, 6, 7], 2));

// const lengthOfLongestSubstring = (str) => {
//   let l = 0;
//   let res = 0;
//   let map = new Map();

//   for (let r = 0, len = str.length; r < len; r++) {
//     if (map.has(str[r]) && l <= map.get(str[r])) {
//       l = map.get(str[r]) + 1;
//     }
//     map.set(str[r], r);
//     res = Math.max(res, r - l + 1);
//   }
//   return res;
// };
// console.log(lengthOfLongestSubstring("xcvbxcds"));

// // 定义链表节点对象
// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// // 创建链表
// const list = new ListNode(1);
// list.next = new ListNode(2);
// list.next.next = new ListNode(3);
// list.next.next.next = new ListNode(4);
// //遍历打印链表
// const traverseListNodes = (head) => {
//   let cur = head;
//   while (cur !== null) {
//     console.log(cur.val);
//     cur = cur.next;
//   }
// };
// traverseListNodes(list);
// const reverseListNodes = (head) => {
//   let pre = null;
//   let cur = head;
//   while (cur !== null) {
//     let next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
//   return pre;
// };
// console.log("====after====");
// traverseListNodes(reverseListNodes(list));

// const lengthOfLongestSubstring = (str) => {
//   let l = 0;
//   let maxLen = 0;
//   let map = new Map();
//   for (let r = 0, len = str.length; r < len; r++) {
//     if (map.has(str[r]) && l <= map.get(str[r])) {
//       l = map.get(str[r]) + 1;
//       maxLen = Math.max(maxLen, r - l + 1);
//     }
//     map.set(str[r], r);
//   }
//   return maxLen;
// };
// console.log(lengthOfLongestSubstring("xcvbxcds"));

//
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
