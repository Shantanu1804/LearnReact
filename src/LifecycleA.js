import React, { Component } from 'react'

export class LifecycleA extends Component {

constructor(props) {
  super(props)

  this.state = {
     name: 'Lloyds'
  }
  console.log('constructor')
}

static getDerivedStateFromProps(props,state)
{
console.log('LC getDerivedStateFromProps')
return null;


}

componentDidMount(){
    console.log('component did mount')
}


shouldComponentUpdate(){
  console.log('shouldComponentUpdate')
  return true
}
getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('getSnapshotBeforeUpdate')
  return null
}
componentDidUpdate(){
  console.log('componentDidUpdate')
}
changeState = () => {
  this.setState({
    name: 'Lloyds Bank'
  })
}

  render() {
      console.log('render')
    return (
      <div>LifecycleA
<button onClick = {this.changeState}> Change State</button>

      </div>

    )
  }
}

export default LifecycleA