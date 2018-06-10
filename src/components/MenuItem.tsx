import * as React from 'react';
import { ReactNode } from 'react';
import { SFC } from 'react' // SFC: StatelessComponent<P>
import Toggleable from './toggleable';
import {ToggleableComponentProps} from './toggleable';

type MenuItemProps = {
  title: string;
  show: boolean;
  toggle: (event: React.MouseEvent<HTMLElement>) => void
}

type ToggleableMenuProps = {
  title: string;
  children: string | number | ReactNode
}

const MenuItem: SFC<MenuItemProps & ToggleableComponentProps> = ({title, toggle, show, children}) => (
  <>
    <div onClick={toggle}>
      <h1>{title}</h1>
    </div>
    {show? children: null}
  </>
)

type Props = {
  title: string
}

const ToggleableMenu: SFC<Props> = ({ title, children }) => (
  <Toggleable 
    render = {({ show, toggle }) => (
      <MenuItem show={show} title={title} toggle={toggle}>
        {children}
      </MenuItem>
    )}
  />
)

const ToggleableMenuViaComponentInjection: SFC<ToggleableMenuProps> = ({title, children}) => (
  <Toggleable component={MenuItem} props={{title}}>
    {children}
  </Toggleable>
)

class Menu extends React.Component{
  public render(){
    return (
      <>
        {React.createElement(
          'div',
          {data: 'secret'},
          React.createElement(
            'h1',
            {data: 'h1', children: 'bye'},
            'a','b','c'
          )
        )}
        {[
          <h1 key={1} children={'uuuuuu'} />,
          <h1 key={2}>1</h1>,
          <h1 key={3}>1</h1>,
          <h1 key={5}>1</h1>
        ]}
      </>
    )
  }
}

export { ToggleableMenu, ToggleableMenuViaComponentInjection, Menu }