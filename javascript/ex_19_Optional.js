// 옵셔널 체이닝 => ES11 ( ECMA 2020 )

let cat = {
  name1: "나비",
  age: 2,
  owner: {
    name1: "박연미"
  }
}

console.log(cat.name1);
console.log(cat['name1']);

// 객체를 동적으로 가져오기 
function getValue(obj, key) {
  return obj[key];
}