"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
// ----- 基本類型 -----
let str = 'Joshua';
let num = 1000;
let boo = true;
let n = null;
let un = undefined;
let test;
// 陣列
let arr = ['a', 'b'];
let arr3 = [['aa', 'bb']];
// 元組
let tuple = [1, 'a', true];
let tuple2 = [['a', 'b']];
// ----- Enum 枚舉 -----
// e.x -> 直播api 獲取直播狀態
// 成功 失敗 直播中
// 0   -1   1
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const liveStatus = LiveStatus.SUCCESS;
console.log('直播狀態為 --->', liveStatus);
// ----- Union 同樣的變數放不同的類型 -----
let aaa;
aaa = 1023;
aaa = 'Annie';
let a1;
a1 = 'Joshua';
a1 = 1024;
let a2;
a2 = true;
a2 = 'Joshua';
const obj = {
    name: 'Joshua',
    job: 'FE Dev',
    age: 30
};
// ----- function ----- 
// 參數類型
function hello(a, b) {
    return a + b;
}
function hello2(a, b) {
    console.log(a + b);
    return 1024;
}
function hello3(a, b, c) {
    return 1024;
}
// 對於 undefined 的處理
const test2 = (a) => {
    console.log(a);
};
function hello4(name, age) {
    // let a: number
    // a = age
    if (age === undefined)
        return -1; // 因為 age 是可選的所以有可能是 undefined 這一行可以即時找到問題
    test2(age);
    return age;
}
// 箭頭函式
const func = () => {
};
const func2 = () => {
    return 1024;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
// 也許 data1 內容會有變動
const data1 = {
    userId: 1,
    id: 1,
    title: "string",
    completed: false
};
// 假設 data1 是動態的
const beta = data1;
// ----- class -----
// private 私有
// public 公開
// protected 受保護
class Live {
    constructor(getRoomName, getId, getLiverName) {
        console.log('建立直播中...');
        this.roomName = getRoomName;
        this.id = getId;
        this.liverName = getLiverName;
    }
}
class CarLive extends Live {
    constructor(getRoomName, getId, getLiverName) {
        super(getRoomName, getId, getLiverName);
    }
    start() {
        // super.name  // 在 Live 外面是會訪問不到的 name
    }
}
// 外面是會訪問不到的
const live = new Live('1號房', '000001', 'MC.Joshua');
console.log('直播結果 --->', live);
// console.log('直播結果 --->', live.id)
const carLive = new CarLive('2號房', '000002', 'Benz J');
// console.log(carLive.name) // 在 carLive 外面是會訪問不到的
class Live2 {
    constructor(name) {
        _Live2_name.set(this, void 0); // # 變成真的私有變數
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
const live2 = new Live2('真的私有變數的參數');
console.log('live2 的內容 --->', live2);
class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    start() { }
}
// ----- 泛型 -----  // 如果希望這個函式有多種形式的支援的話就使用泛型
function print(data) {
    console.log('data', data);
}
print(999);
print('泛型 String');
print(true);
class Print {
    constructor(d) {
        this.data = d;
    }
}
const p = new Print(1024);
const p1 = new Print('P String');
console.log('p', p);
console.log('p1', p1);
const cats = {
    miffy: {
        age: 10,
        breed: 'Persian'
    },
    boris: {
        age: 5,
        breed: 'Maine Coon'
    },
    mordred: {
        age: 10,
        breed: 'British Short Hair'
    },
};
console.log("cats -->", cats);
const obj1 = {
    name: true,
    age: false
};
const todo = {
    title: 'Coding',
    completed: true,
};
console.log('todo -->', todo);
const todo2 = {
    title: 'Go to sleep',
    completed: false,
    createdAt: 1615544252770,
};
console.log('todo2 -->', todo2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQkFBbUI7QUFDbkIsSUFBSSxHQUFHLEdBQVcsUUFBUSxDQUFBO0FBQzFCLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQTtBQUN0QixJQUFJLEdBQUcsR0FBWSxJQUFJLENBQUE7QUFDdkIsSUFBSSxDQUFDLEdBQVMsSUFBSSxDQUFBO0FBQ2xCLElBQUksRUFBRSxHQUFjLFNBQVMsQ0FBQTtBQUU3QixJQUFJLElBQVMsQ0FBQTtBQUViLEtBQUs7QUFDTCxJQUFJLEdBQUcsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUM5QixJQUFJLElBQUksR0FBZSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7QUFFckMsS0FBSztBQUNMLElBQUksS0FBSyxHQUE4QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDckQsSUFBSSxNQUFNLEdBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUc3QyxzQkFBc0I7QUFFdEIsc0JBQXNCO0FBQ3RCLFlBQVk7QUFDWixhQUFhO0FBQ2IsSUFBTSxVQUlMO0FBSkQsV0FBTSxVQUFVO0lBQ2QsaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUpLLFVBQVUsS0FBVixVQUFVLFFBSWY7QUFFRCxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFBO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBR3JDLGdDQUFnQztBQUNoQyxJQUFJLEdBQW9CLENBQUE7QUFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQTtBQUNWLEdBQUcsR0FBRyxPQUFPLENBQUE7QUFN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