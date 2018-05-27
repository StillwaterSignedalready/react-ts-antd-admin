import * as React from 'react';
import Button from './Button';

const initialState  = {clickCount: 0}
type State = Readonly<typeof initialState>

export default class ButtonCounter extends React.Component<{}, State>{
  // 设置state为只读，这样便防止了对state直接赋值
  public readonly state: State = initialState

  public render(){
    const { clickCount } = this.state;
    
    return (
      <>
        <Button onClick={this.handleIncrement}>
          <span>Increment</span>
        </Button>
        <Button onClick={this.handleDecrement}>
          <span>Decrement</span>
        </Button>
        You've clicked me {clickCount} times!
      </>
    )
  }

  // setState显然又是一个高阶函数，他的参数函数的含义是：旧状态映射到新状态的方式
  private handleIncrement = () => this.setState(handleIncrement);

  private handleDecrement = () => this.setState(handleDecrement);

}

// 外部声明纯函数，这样我们不需要了解渲染逻辑就可以简单的测试这些状态更新函数
const handleIncrement = (prevState: State) => ({
  clickCount: prevState.clickCount + 1,
})
const handleDecrement = (prevState: State) => ({
  clickCount: prevState.clickCount - 1,
})