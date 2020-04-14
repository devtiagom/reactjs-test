import React from 'react';
import './PageHeader.css'

export default props => (
<div className="pageHeader">
    <i className={`fa fa-${props.icon}`}></i> | <span>{props.title}</span>
</div>
);