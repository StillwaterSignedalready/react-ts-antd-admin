import * as React from 'react';
import { ComponentType, MouseEvent, ReactNode } from 'react'

const defaultProps = {props: {} as {[name: string]: any} } // as: 类型断言assert
// {[name: string]: any}大概是在形容对象的key-value格式: key是string 值是any

const isFunction = (f: any) => (typeof f === 'function')

const initialState  = {
  show: false
}

type State = Readonly<typeof initialState>;

// Partial: 把接口所有类型化为可选
type Props = Partial<{
  children: RenderCallback | ReactNode;
  render: RenderCallback;
  component: ComponentType<ToggleableComponentProps<any>> 
} & DefaultProps>;

type DefaultProps = typeof defaultProps

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;

// 这里的等号应该是泛型默认值的意思
type ToggleableComponentProps<P extends object = object> = {
  show: State['show'];
  toggle: Toggleable['toggle']
} & P

class Toggleable extends React.Component<Props, State>{
  public static readonly defaultProps: Props = defaultProps;
  public readonly state: State = initialState;

  public render(){
    const {
      // const InjectedComponent = this.props.component
      component: InjectedComponent, 
      props,
      render,
      children} = this.props;
    const renderProps = {
      show: this.state.show,
      toggle: this.toggle
    }

    /** -----------return阶段---------------------- */
    if(InjectedComponent){
      // 此处有解构赋值 show={renderProps.show}等等
      return (
        <InjectedComponent {...props} {...renderProps} >
          {children}
        </InjectedComponent>
      )
    }

    // 用过render-callback方法，把外部的render导入组件内部，使render可以千变万化
    // 这两个return代表两种render props方式:1 通过props 2 通过children
    if(render){
      return render(renderProps)
    }

    // 此处as为类型断言
    return isFunction(children) ? (children as RenderCallback)(renderProps) : null
  }

  private toggle = (event: MouseEvent<HTMLElement>) => this.setState(updateShowState)
}

const updateShowState = (prevState: State) => ({show: !prevState.show})

export { Toggleable as default, ToggleableComponentProps}