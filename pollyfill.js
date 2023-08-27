
Object.prototype.checkeys = function(keys) {
    let arr = Object.keys(this);
    for(let i = 0; i < arr.length; i++) {
        if(!keys[arr[i]]) return false;
    }
    return true;
}

a = {2:2, 1:1, 3:false};
console.log(a.checkeys({1:true, 2:true}));