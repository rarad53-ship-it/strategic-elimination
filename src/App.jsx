import { useEffect, useState } from "react";

export default function App() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/files")
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📁 ملفات المشروع</h1>

      <ul>
        {files.map((file, i) => (
          <li key={i}>{file}</li>
        ))}
      </ul>
    </div>
  );
}
