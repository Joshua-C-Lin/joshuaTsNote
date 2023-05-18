// ----- 基本類型 -----
let str: string = 'Joshua'
let num: number = 1000
let boo: boolean = true
let n: null = null
let un: undefined = undefined

let test: any

// 陣列
let arr: string[] = ['a', 'b']
let arr3: string[][] = [['aa', 'bb']]

// 元組
let tuple: [number, string, boolean] = [1, 'a', true]
let tuple2: [string, string][] = [['a', 'b']]


// ----- Enum 枚舉 -----

// e.x -> 直播api 獲取直播狀態
// 成功 失敗 直播中
// 0   -1   1
enum  LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1
}

const liveStatus = LiveStatus.SUCCESS
console.log('直播狀態為 --->', liveStatus)


// ----- Union 同樣的變數放不同的類型 -----
let aaa: number | string
aaa = 1023
aaa = 'Annie'

// ----- type 自定義類型 -----
type myKinds = number | string
type myKinds2 = boolean | string

let a1: myKinds
a1 = 'Joshua'
a1 = 1024

let a2: myKinds2
a2 = true
a2 = 'Joshua'

// ----- interface -----
interface User {
  name: string;
  age: number;
}

// ----- object 物件 -----

type userInfo = {
  name: string
  job: string
} // type 不可擴充

interface userInfo2 {
  name: string
  job: string
} // interface 可擴充

interface userInfo2 {
  age: number
  height?: number // 加？的就是不一定要包含的（可選）
} // interface 可擴充 

const obj: userInfo2 = {
  name: 'Joshua',
  job: 'FE Dev',
  age: 30
}


// ----- function ----- 
// 參數類型
function hello(a: string, b: string) {
  return a + b
}

function hello2(a: string, b: string): number {
  console.log(a + b)
  return 1024
}

function hello3(a: number, b: boolean, c: string) {
  return 1024
}


// 對於 undefined 的處理
const test2 = (a: number) => {
  console.log(a)
}

function hello4 (name: string, age?:number) {  // ? 可選的要放在最後面否則會報錯
  // let a: number
  // a = age
  if (age === undefined) return -1  // 因為 age 是可選的所以有可能是 undefined 這一行可以即時找到問題
  test2(age)
  return age
}

// 箭頭函式
const func = () => {  // void

}

const func2 = () => {  // number
  return 1024
}


// ----- 斷言 as unknown -----  // e.x -> API 來的資料事先並不知道類型的狀況
type Data = {  // API 會回的資料格式
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json() as Data
}

// 也許 data1 內容會有變動
const data1: Data = {
  userId: 1,
  id: 1,
  title: "string",
  completed: false
}

type Beta = {
  name: string
}

// 假設 data1 是動態的
const beta = data1 as unknown as Beta


// ----- class -----

// private 私有
// public 公開
// protected 受保護

class Live {
  roomName: string
  private id: string
  protected liverName: string

  constructor (getRoomName: string, getId: string, getLiverName: string) {
    console.log('建立直播中...')
    this.roomName = getRoomName
    this.id = getId
    this. liverName = getLiverName
  }
}

class CarLive extends Live {
  constructor (getRoomName: string, getId: string, getLiverName: string) {
    super(getRoomName, getId, getLiverName)
  }

  start() {
    // super.name  // 在 Live 外面是會訪問不到的 name
  }
}
// 外面是會訪問不到的
const live = new Live('1號房', '000001', 'MC.Joshua')
console.log('直播結果 --->', live)
// console.log('直播結果 --->', live.id)

const carLive = new CarLive('2號房', '000002', 'Benz J')
// console.log(carLive.name) // 在 carLive 外面是會訪問不到的


class Live2 {
  #name  // # 變成真的私有變數
  constructor(name: string) {
    this.#name = name
  }
}

const live2 = new Live2('真的私有變數的參數')
console.log('live2 的內容 --->', live2)
// console.log(live2.#name)  // 因為屬性 '#name' 具有私人識別碼，所以無法在類別 'Live2' 外存取該屬性。ts(18013)


interface CarProps {
  name: string
  age: number
  start: () => void
}

class Car implements CarProps {
  // private name: string
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  start() {}
}


// ----- 泛型 -----  // 如果希望這個函式有多種形式的支援的話就使用泛型
function print<T>(data: T) {
  console.log('data', data)
}

print<number>(999)
print<string>('泛型 String')
print<boolean>(true)

class Print<T> {
  data: T

  constructor(d: T) {
    this.data = d
  }
}

const p = new Print<number>(1024)
const p1 = new Print<string>('P String')
console.log('p', p)
console.log('p1', p1)


// ----- utility -----  // TS 內建工具 ---> https://www.typescriptlang.org/docs/handbook/utility-types.html

// Record 例子
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {  // key -> CatName & value -> CatInfo
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
}

console.log("cats -->", cats)

const obj1: Record<string, boolean> = {
  name: true,
  age: false
}


// Pick 例子
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;  // 從 Todo 裏面揀選兩個資訊

const todo: TodoPreview = {
  title: 'Coding',
  completed:  true,
}
console.log('todo -->', todo)


// Omit 例子
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview2 = Omit<Todo2, "description">;  // 從 Todo2 裏面移除一個資訊

const todo2: TodoPreview2 = {
  title: 'Go to sleep',
  completed: false,
  createdAt: 1615544252770,
}
console.log('todo2 -->', todo2)