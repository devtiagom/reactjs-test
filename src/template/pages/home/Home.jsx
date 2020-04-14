import React from 'react';
import './Home.css';

import Layout from '../../Layout';
import PageHeader from '../../../components/pageHeader/PageHeader';

export default props => (
    <Layout>
        <div className="home">
            <PageHeader icon="home" title="Início" />
        </div>
    </Layout>
);