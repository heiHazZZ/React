import { useRef } from "react"

const Plgue = () => {
  // 1.创建一个空的ref
  const inputRef = useRef(null)
  return <div>
    {/* 不要在组件渲染完成前操作DOM，否则会报错 */}
    {/* 2.ref绑定 */}
    <input type="text" ref={inputRef} />
    {/* 通过 .cureent拿到DOM对象 */}
    <button onClick={inputRef.current.focus()}>获取焦点</button>
    <button onClick={alert(inputRef.current.value)}>获取值</button>
  </div>
}

export default Plgue