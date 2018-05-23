import * as React from 'react';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

/** 关于声明周期的注释来自： https://juejin.im/entry/587de1b32f301e0057a28897 */

class Hello extends React.Component<IProps, object>{
  public componentWillReceiveProps(){ // 在已经挂在的组件(mounted component)接收到新props时触发
    console.log('~~~ componentWillReceiveProps ~~~')
  }
  
  public shouldComponentUpdate(nextProps: {}, nextState: {}){ // 在接收到新props或state时，或者说在componentWillReceiveProps(nextProps)后触发,在接收新的props或state时确定是否发生重新渲染，默认情况返回true，表示会发生重新渲染
    console.log('~~~ shouldComponentUpdate ~~~')
    return true
  }
  
  public componentWillUpdate(nextProps: {}, nextState: {}){ // 在props或state发生改变或者shouldComponentUpdate(nextProps, nextState)触发后, 在render()之前
    console.log('~~~ componentWillUpdate ~~~')
  }
  /** ----------- update ----------- */
  /** ----------- mount ----------- */
  public componentWillMount(){
    console.log('~~~ componentWillMount ~~~')
  }
  
  public render(){ // ========================== render ==========================
    console.log('~~~ render ~~~')
    const { name, enthusiasmLevel} = this.props;
    
    if (enthusiasmLevel && enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    
    return (
      <div className="hello">
        <div className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel || 0)}</div>
      </div>
    )
  }
  
  // render之后
  public componentDidMount(){
    console.log('~~~ componentDidMount ~~~')
  }
  /** ----------- mount ----------- */
  /** ----------- unmount ----------- */
  public componentWillUnmount(){ // 清理操作，比如无效的timers、interval，或者取消网络请求，或者清理任何在componentDidMount()中创建的DOM元素(elements)
    console.log('~~~ componentWillUnmount ~~~')
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}