import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exat path={`${match.path}`} compoent={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);


export default ShopPage;