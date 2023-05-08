import { useEffect, useState } from "react";

export default function Compiler() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = cssCode;
    document.head.appendChild(style);
  }, [cssCode]);

  const onHtmlChange = (e) => {
    setHtmlCode(e.target.value);
  };

  const onCssChange = (e) => {
    setCssCode(e.target.value);
  };

  return (
    <>
    
      <div className="container mx-auto my-4 p-4 rounded-md shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-bold mb-2">HTML</h2>
            <textarea
              className="w-full h-60 resize-none p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={htmlCode}
              onChange={onHtmlChange}
              placeholder="Enter HTML code here..."
            ></textarea>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">CSS</h2>
            <textarea
              className="w-full h-60 resize-none p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={cssCode}
              onChange={onCssChange}
              placeholder="Enter CSS code here..."
            ></textarea>
          </div>
        </div>
        <h2 className="text-lg font-bold my-4">Output</h2>
        <div
          className="w-full p-4 border border-gray-300 rounded-md shadow-inner whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: htmlCode }}
        ></div>
      </div>
    </>
  );
}
