import React, { Fragment } from 'react';

import Header from './header/Header';
import Main from './main/Main';
import Aside from './aside/Aside';

export default props => (
    <Fragment>
        <Header />
        <Aside />
        <Main>
            {props.children}
        </Main>
    </Fragment>
);