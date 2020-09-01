import React, { useState } from 'react';

export default function App() {
    const [title, _] = useState ('Hello')

    return (
    <div>App {title}</div>
    )
}