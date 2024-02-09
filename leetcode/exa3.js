function permute(nums) {
    const result = [];
    
    function backtrack(current) {
        if (current.length == nums.length) {
            result.push(current.slice()); 
            return;
        }
        
        for (let num of nums) {
            if (!current.includes(num)) {
                current.push(num); 
                backtrack(current); 
                current.pop(); 
            }
        }
    }
    
    backtrack([]);
    return result;
}


const nums = [1, 2, 3];
console.log(permute(nums));