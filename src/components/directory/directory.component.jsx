import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {/* {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                    <MenuItem key={id} title={title} imge={imageUrl} size={size} linkUrl={linkUrl} />
                ))} */}
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

const masStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(masStateToProps)(Directory);