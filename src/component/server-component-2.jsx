import fs from 'fs';

export default function ServerComponentTwo() {
    fs.readFileSync("src/component/server-component-2.jsx","utf-8");
    return (
        <div>Server Component Two</div>
    );
}