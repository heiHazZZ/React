
// 头像组件

// 组件通过函数参数形式接受props
// 注：props 为只读
// 使用结构 {} 简化props的使用
 const Avatar = ({imgUrl,size}) => {
  return <img src={imgUrl} width={size} alt="" />
 }

 const Prent = () => {
  return <div>
    {/* 给组件传递props   非字符串数据要用{} */}
    <Avatar 
    imgUrl="https://v2.cn.vuejs.org/images/components.png"
    size={500}
    ></Avatar>
  </div>
 }

 export default Prent