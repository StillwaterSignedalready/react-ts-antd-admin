import * as React from 'react';
import { SFC } from 'react' // SFC: StatelessComponent<P>
import Toggleable from './toggleable';
import {ToggleableComponentProps} from './toggleable';

type MenuItemProps = {
  title: string;
  show: boolean;
  toggle: (event: React.MouseEvent<HTMLElement>) => void
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

export default MenuItem