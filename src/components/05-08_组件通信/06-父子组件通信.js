import { useState } from "react"
import './index.scss'
import classNames from "classnames"
const ChildrenList = ({id,title,flag,changeData,deleteData}) => {
  return <div className={'childrenList'}>
    <div onClick={() => changeData(id)} className={classNames('box',flag && 'flags')}>{title}</div>
    <span onClick={()=> deleteData(id)}>X</span>
  </div>
}

// 父传子数据：props   子修改父数据：自定义事件
const ParentBox = ()=> {
  const list = [
    {id:0,title:'学习react',flag:true},
    {id:1,title:'休息',flag:false},
    {id:2,title:'吃饭',flag:false}
  ]
  const [data,setData] = useState(list)
  // 自定义事件 改变背景色
  // 父组件定义事件，子组件触发事件修改父内数据
  const changeData = id => {
    setData(data.map(item => {
      if(item.id === id) {
        // debugger
        return {
          ...item,
          flag:!item.flag
        }
      }
      return item
    }))
  }

  // 删除
  const deleteData = id => {
    setData(data.filter(item => item.id !== id))
  }
  return <div>
    <h1>待办任务列表：</h1>
    {data.map(item => {
      return (<ChildrenList {...item} key={item.id} changeData={changeData} deleteData={deleteData}></ChildrenList>)
    })}
    
  </div>
}

export default ParentBox