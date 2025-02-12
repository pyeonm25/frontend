// 옵셔널 체이닝 => ES11 ( ECMA 2020 )

let cat = {
  name1: "나비",
  age: 2,
  owner: {
    name1: "박연미"
  }
}

console.log(cat.name2);
console.log(cat['name1']);

// 객체를 동적으로 가져오기 
function getValue(obj, key) {
  // if (obj[key] === undefined) {
  //   return "해당 키값이 없습니다";
  // }
  if (!obj[key]) return "해당 키값이 없습니다";
  return obj[key];
}

// 객체 값을 동적으로 추가하기 
function addKey(obj, key, value) {
  if (!obj || !key || !value) return "없는 값입니다";
  if (!!obj[key]) return "해당 키값이 이미 있습니다";
  obj[key] = value;
  return obj;
}

function printKey(obj, key) {
  return obj?.[key] ? obj[key] : '없는 값입니다';
}

console.log(getValue(cat, 'name1'));
console.log(getValue(cat, 'name2'));

console.log(addKey(cat, 'callOwner', () => { console.log(" 냐옹~!!!") }));
console.log(addKey(cat, 'callOwner', () => { console.log(" 냐옹~!!!") }));

console.log(cat);
cat.callOwner();

console.log(addKey());
console.log("====================")
console.log(printKey());
console.log(printKey(cat, 'age'));

// 객체에서 요소 한개 삭제하는 메서드 만들기 
function removeKey() {

}