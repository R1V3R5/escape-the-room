import _ from 'lodash';

let testPath = [
  [0,1,2,3,0,1,2,3,0,1]
]

let path = [];
for(let i=0; i < 10; i++) {
  path.push(_.random(0,3))
}

export { path, testPath };