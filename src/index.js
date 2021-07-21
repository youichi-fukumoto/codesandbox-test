/**
 * const, let 等の変数宣言
 */
// var var1 = "var変数";
// console.log(var1);

// var変数は上書き可能
// var1 = "上書き"

// console.log(var1);

// const var4 = {
//   name: "陽一",
//   age: 26
// };
// console.log(var4);

// var4.name = "youichi";
// console.log(var4);

//const で定義したオブジェクトはプロパティの変更が可能
//const で定義した配列はプロパティの変更が可能
// 基本的にconst で定義することになると思う
// const var5  = ['dog', 'cat'];
// console.log(var5);

// const name = "youichi";
// const age = 26;

//「私の名前はyouichiです。年齢は26歳です」
// const message = `私の名前は${name}です。名前は${age}です.`;
// console.log(message);

//従来の関数
// function func1(str){
//   return str;
// }

// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const myProfile = {
//   name: "youichi",
//   age: 26,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);
// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`

// console.log(message2);

// const myProfile = ["youichi", 26];

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは! ${name}さん`);
// sayHello();

/**
 * スプレッド構文
 */

//　配列の展開
