import React from 'react';
import './Profile.css';

import Layout from '../../Layout';
import PageHeader from '../../../components/pageHeader/PageHeader';

export default props => (
    <Layout>
        <div className="profile">
            <PageHeader icon="user" title="Seu Perfil" />
        </div>
    </Layout>
);