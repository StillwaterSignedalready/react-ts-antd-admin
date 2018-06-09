import * as React from 'react';
import { SFC } from 'react' // SFC: StatelessComponent<P>

type MenuItemProps = {
  title: string;
  show: boolean;
}

const MenuItem: SFC<MenuItemProps> = ({title, toggle, show, children}) => 
  <>
    <div onClick={toggle}>
      <h1>{title}</h1>
    </div>
    {show? children: null}
  </>

export default MenuItem