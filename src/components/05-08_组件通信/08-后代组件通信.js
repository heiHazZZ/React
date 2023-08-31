import { createContext, useContext, useState } from "react"

// 1.创建 COntext对象   放在最外层
const ThemeContext = createContext()

const UnbornOne = ()=> {
  // 3.范围内的组件，获取共享数据
  const {theme,changeTheme} = useContext(ThemeContext)
  return <div>
    <h1>孙代</h1>
    <ul style={{color:theme}}>
      <li>菜单一</li>
      <li>菜单二</li>
    </ul>
    <button onClick={changeTheme}>重置颜色</button>
  </div>
}

const UnbornTwo = () => {
  const {theme} = useContext(ThemeContext)
  return <div>
    <h1 style={{color:theme}}>子代</h1>
    <UnbornOne></UnbornOne>
  </div>
}

const UnbornScreen = () => {
  const [theme,setTheme] = useState('#1677FF')
  const changeTheme = ()=> {
    setTheme('#1677FF')
    console.log(1);
  }
  return (
    <div>
      {/* 2.ThemeContext.Provider划定范围，提供共享数据和方法  范围内组件都能读取到value绑定的数据 */}
      <ThemeContext.Provider value={{theme,changeTheme}}>
        <h1>父代</h1>
        <input type="color" value={theme} onChange={e => setTheme(e.target.value)} />
        <UnbornTwo></UnbornTwo>
      </ThemeContext.Provider>
      
    </div>
  )
}

export default UnbornScreen