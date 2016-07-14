// 0 is up
// 1 is right
// 2 is down
// 3 is left
 
let testPath = [
  [0,1,2,3,0,1,2,3,0,1]
]

let path = [];
for(let i=0; i < 10; i++) {
  path.push(_.random(0,3))
}

export { path, testPath };