/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  /*
      dequeue = []
      ans = []

      for 0..k - 1:
          
          while true:
              if(deq.length):
                  if (deq[deq.len - 1] < nums[i]):
                      deq.pop()
                  else:
                      break
              else:
                  break


          deq.push(nums[i])
          ans.push(deq[0]) 

      for k..n - 1:

          if(deq.length):
              deq[0]
          else:


          while true:
              if(deq.length):
                  if (deq[deq.len - 1] < nums[i]):
                      deq.pop()
                  else:
                      break
              else:
                  break


          deq.push(nums[i])
          ans.push(deq[0]) 


  */

  const storage = []; //[index, value] dequeue
  const ans = [];
  const n = nums.length;

  for(let i = 0; i < k; i++) {

      while(true) {
          if (storage.length) {
              if(storage[storage.length - 1][1] < nums[i]) {
                  storage.pop();
              } else {
                  break;
              }
          } else {
              break;
          }
      }

      storage.push([i, nums[i]]);
  }

  ans.push(storage[0][1]);

  for (let i = k; i < n; i++) {

      if (storage.length) {
          if(i - k  === storage[0][0]) {
              storage.shift();
          }
      }

      while(true) {
          if (storage.length) {
              if(storage[storage.length - 1][1] < nums[i]) {
                  storage.pop();
              } else {
                  break;
              }
          } else {
              break;
          }
      }

      storage.push([i, nums[i]]);
      ans.push(storage[0][1])
  }

  return ans;
};