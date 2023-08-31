import { useState } from "react"

const Demo = () => {

  const [count,setCount] = useState(1)
  const [list,setList] = useState([1,2,3])
  // 修改数组
  const changeList = () => {
    setList(list.map(item => {
      if(item === 1) return 0
      return item
    }))
  }

  // 删除数组
  const deleteList = ()=> {
    setList(list.filter(item => item !== 2))
  }

  const [student,setStudent] = useState({name:'张三',age:18})
  return <div>
    <div>
    <h2>计数器：{count}</h2>
    <button  onClick={()=> setCount(count+1)}>+1</button>
    </div>
    <div>
      <h1>数组</h1>
      <p>值：
        {list.map(item => {
          return <li key={item}>{item}</li>
        })}
      </p>
      <button onClick={()=> setList([...list,4])}>添加</button>
      <button onClick={changeList}>修改</button>
      <button onClick={deleteList}>删除</button>
    </div>
    
    <div>
      <h1>对象</h1>
      <p>
        姓名：{student.name} 年龄：{student.age} 性别：{student.sex ? student.sex : '无'}
      </p>
      {/* 对象添加和修改 */}
      <button onClick={()=> setStudent({...student,sex:'男'})}>添加</button>
      <button onClick={()=> setStudent({...student,name:'李四'})}>修改</button>
    </div>
  </div>
}

export default Demo