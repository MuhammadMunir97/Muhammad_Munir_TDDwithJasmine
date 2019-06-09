//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function Sum1toN(n){
    var sum = 0;
    for (var i = 1; i < n+1;i++){
        sum += i;
    }
    return sum;
}
//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr){
    return arr[0] + arr[arr.length - 1];
}

//Exercise 2 creating a function that returns the largest value
function returnTheLargest(arr){
    var max = arr[0];
    for (var i = 0; i< arr.length;i++){
        if (arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("returnTheLargest", function() { 
    it("should return 10 when passed [1,2,10] as an argument", function() { 
        expect(returnTheLargest([1,2,3])).toEqual(3); 
    }); 
    it("should return 8 when we pass [2,3,8] as an argument", function() { 
        expect(returnTheLargest([2,3,8])).toEqual(8); 
    }); 
    it("should return -3 when we pass [-6,-45,-3,-4] as an argument", function() { 
        expect(returnTheLargest([-6,-45,-3,-4])).toEqual(-3); 
    }); 
});