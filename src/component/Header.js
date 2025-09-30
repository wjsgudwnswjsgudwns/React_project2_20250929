import "./Header.css";

import React from 'react';

function Header() {

    return (
        <div className="Header">
            <h3>오늘은 📅</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}

export default React.memo(Header); // Header 컴포넌트에 메모이제이션 적용 후 내보내기