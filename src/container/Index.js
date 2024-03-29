import React, { useState, useEffect } from "react"
import {connect} from 'react-redux'
import {getIndexList} from '../store/index'

function Index(props) {
  const [count, setCount] = useState(1)
  useEffect(() => {
    props.getIndexList()
  }, []) 
  return (
    <div>
      <h1>
        Hello,{props.title} {count}号技师为您服务
      </h1>
      <button onClick={() => setCount(count + 1)}>点我试试</button>
      <br/>
      <ul>
        { props.list.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

export default connect(
  state => { return {list:state.index.list}},
  {getIndexList}
) (Index)
