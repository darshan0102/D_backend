function randomIndex(nums, target) {
    const indices = [];
    
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            indices.push(i);
        }
    }
    
    
    const randomIndex = Math.floor(Math.random() * indices.length);
    
    return indices[randomIndex];
}


const nums = [1, 2, 3, 4, 5, 4, 4, 6, 7, 4];
const target = 4;
const randomIdx = randomIndex(nums, target);
console.log("Random index of target", target, "is:", randomIdx);
