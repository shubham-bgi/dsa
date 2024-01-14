/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    function check(top, num) {
        if(!top) {
            stack.push(num);
            return;
        }
        if(top > 0 && num < 0) {
            if(Math.abs(top) == Math.abs(num)) {
                stack.pop();
            } else if (Math.abs(top) < Math.abs(num)) {
                stack.pop();
                top = stack[stack.length - 1];
                check(top, num);
            }

        } else {
            stack.push(num);
        }
    }
    asteroids.forEach(num => {
        let top = stack[stack.length - 1];
        check(top, num);
    });
    return stack;
};