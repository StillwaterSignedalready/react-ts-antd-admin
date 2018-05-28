import { Button, Icon } from 'antd';
import * as React from 'react';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  method: () => void
}

/** 关于声明周期的注释来自： https://juejin.im/entry/587de1b32f301e0057a28897 */

class Hello extends React.Component<IProps, object>{
  private constructor(props: IProps){
    super(props)
    console.log('~~~ constructor ~~~', this)
  }

  public componentWillReceiveProps(){ // 父组件发生 render 的时候就会调用子组件的 componentWillReceiveProps,不管 props 有没有更新，也不管父子组件之间有无数据交换,可以根据属性的变化，通过调用this.setState()来更新你的组件状态
    console.log('~~~ componentWillReceiveProps ~~~')
  }
  
  public shouldComponentUpdate(nextProps: {}, nextState: {}){ // 在接收到新props或state时，或者说在componentWillReceiveProps(nextProps)后触发,在接收新的props或state时确定是否发生重新渲染，默认情况返回true，表示会发生重新渲染
    // 当你调用 setState() 方法的时候都会调用此方法用来判断是否要重新渲染组件
    // 我们可以在这个方法中处理只是数据改变，界面不改变的情况，用来优化渲染效率 
    console.log('~~~ shouldComponentUpdate ~~~')
    return true
  }
  
  public componentWillUpdate(nextProps: {}, nextState: {}){ // 这个方法在 shouldComponentUpdate() 方法返回 true 的时候就会调用,使用此方法为更新前做一些准备
    console.log('~~~ componentWillUpdate ~~~')
  }

  // render-----

  public componentDidUpdate(){ // 首次 render() 的时候是不会调用的，首次 render() 的时候调用的是 componentDidMount() 方法
    console.log('~~~ componentDidUpdate ~~~')
  }
  /** ----------- update ----------- */  
  public cb = () => {
    console.log('cb called====>', this)
    this.props.method();
  }
  /** ----------- mount ----------- */

  public componentWillMount(){ // 在组件挂载之前( render()之前 )调用。可以用于加载 Loading 条了等操作。据说这里setState方法不会触发重渲染
    console.log('~~~ componentWillMount ~~~')
    console.log('加载loading条,这里setState方法不会触发重渲染')
  }

  // 返回一个 React 元素，纯函数
  public render(){ // ========================== render ==========================
    console.log('~~~ render ~~~')
    const { name, enthusiasmLevel} = this.props;
    
    if (enthusiasmLevel && enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    
    return (
      <div className="hello">
        <div className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel || 0)}</div>
        <Button onClick={this.cb}>
          <Icon type="left"/>Backward
        </Button>
      </div>
    )
  }
  
  public componentDidMount(){ // 在组件挂载之后调用。可以用于耗时操作(请求服务器等)，或定时器等(使得界面先渲染出框架，用户体验更好)
    console.log('~~~ componentDidMount 发出请求~~~')
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