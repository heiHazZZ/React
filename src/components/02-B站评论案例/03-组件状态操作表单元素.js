import { useState } from "react"

const Operate = () => {
  const [value,setValue] = useState('')
  return <div>
    {/* value和onchange要同时出现 */}
    <input type="text" value={value} onChange={ e => setValue(e.target.value)}/>
    <button onClick={ ()=> alert(value)}>获取</button>
    <button onClick={ ()=> setValue('黑马')}>修改</button>
  </div>
}

export default Operate