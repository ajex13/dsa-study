/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  /*
    fix psuedo code
  */

  // --
  const n = fruits.length - 1; 

  let [l, r, ans] = [0, 0, 0];
  const map = new Map();
  while (r <= n) {
      if (map.has(fruits[r])) {
          map.set(fruits[r], map.get(fruits[r]) + 1);
      } else {
          map.set(fruits[r], 1);
      }

      if (map.size <= 2) {
          let count = 0;
          for (const [_, v] of map) {
              count += v;
          }

          ans = Math.max(ans, count);
      } else {
          while (map.size > 2) {
              if (map.get(fruits[l]) === 1) {
                  map.delete(fruits[l])
              } else {
                  map.set(fruits[l], map.get(fruits[l]) - 1)
              }
              l++;
          }

          let count = 0;
          for (const [_, v] of map) {
              count += v;
          }

          ans = Math.max(ans, count);
      }

      r++;
  }

  return ans

};