import { useState } from "react"
import './index.scss'
const Brother = (props)=> {
  return <div className={'Brother'} onClick={() =>props.changeDone(props.item)}>
    <p >{props.item.name}</p>
  </div>
}
// 兄弟组件通信：将数据和方法放在父级组件内
const Rigth = ({id,name,done}) => {
  return <div className="Right">
    <h1>{name}</h1>
  </div>
}

const Pinner = () => {
  const userList = [
    {id:0,name:'周杰伦',done:false},
    {id:1,name:'许嵩',done:true}
  ]
  const [user] = useState(userList)
  const [firend,setFirend] = useState(userList[0])
  const changeDone = item => {
    setFirend(item)
  }
  return <div className="Pinner">
    {user.map(item => {
      return <Brother item={item} key={item.id} changeDone={changeDone}></Brother>
    })}
    <Rigth {...firend}></Rigth>
  </div>
}

export default Pinner