import { MouseEvent, SFC } from 'react' // SFC: StatelessComponent<P>
import * as React from 'react';
// const withDefaultProps = <
//   P extends object,
//   DP extends Partial<P> = Partial<P>
// >(
//   defaultProps: DP,
//   Cmp: ComponentType<P>,
// ) => {
//   // 提取出必须的属性
//   type RequiredProps = Omit<P, keyof DP>;
//   // 重新创建我们的属性定义，通过一个相交类型，将所有的原始属性标记成可选的，必选的属性标记成可选的
//   type Props = Partial<DP> & Required<RequiredProps>;

//   Cmp.defaultProps = defaultProps;

//   // 返回重新的定义的属性类型组件，通过将原始组件的类型检查关闭，然后再设置正确的属性类型
//   return (Cmp as ComponentType<any>) as ComponentType<Props>;
// };

// interface IProps {
//   children?: ReactNode;
//   onClick(e: MouseEvent<HTMLElement>): void
// }

// const Button: SFC<IProps> = ({ onClick: handleClick, children }: IProps) => (
//   <button onClick={handleClick}>{children}</button>
// )
const defaultProps = {
  color: 'red'
}
interface IDefaultProps{
  color?: string
}

type IProps = {
  onClick(e: MouseEvent<HTMLElement>): void;
} & IDefaultProps;


// 有了SFC<IProps>便不需在参数后面加IProps了
// Button 是一个无状态组件 props -> reactElement
const Button: SFC<IProps> = ({ onClick: handleClick, color, children }) => (
  <button style={{ color }} onClick={handleClick}>{children}</button>
);

Button.defaultProps = defaultProps

// readonly state:State = initialState
export default Button