// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the
// end.

// function shiftArray (arr) {
    // const newArr = []
    // // for loop through arr, starting at idx 1 through length
    // for(let i=1; i < arr.length; i++){
        //     // push idx into newArr
        //     newArr.push(arr[i])
        // }
        // // after the loop push 0
        // newArr.push(0)
        
        // return newArr
        
    //     arr.shift()
    //     arr.push(0)
    //     return arr
    // }
    
    // console.log(shiftArray(nums))
    
    
    // Return the given array, after setting any negative values to zero.
    // let result = nums.map(n =>  (n < 0 ? n = 0 : n) )
    
    // console.log(result)
    
    // function negativeToZero(arr) {
        //     // 1for loop 2if value is less than 0, change to zero
        //     for(let i=0; i < arr.length; i++){
            //         if(arr[i] < 0) {
                //             arr[i] = 0
                //         }
                //     }
                //     return arr
                // }
                
                // console.log(negativeToZero(nums))
const nums = [2, -15, 75, 64, -37, 20, -93, -24]

function minMaxAvg(arr){
    let avg = arr[0]
    let max = arr[0]
    let min = arr[0]

    for(let i=1; i < arr.length; i++) {
        avg += arr[i]

        if(max < arr[i]){
            max = arr[i]
        } 
        
        if(min > arr[i]){
            min = arr[i]
        } 
    }

    avg = avg / arr.length
    const newArr = [max, min, avg]

    return newArr
}


console.log(minMaxAvg(nums))