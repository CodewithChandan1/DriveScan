import React from 'react';

const Breadcrumb = ({ path }) => {
    // Split the path into parts
    const parts = path.split(' › ').map((part) => part.trim());

    return (
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#6B7280' }}>
            {parts.map((part, index) => (
                <React.Fragment key={index}>
                    <span>{part}</span>
                    {index < parts.length - 1 && <span style={{ margin: '0 8px' }}>›</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;
