import Head from "next/head";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min";

export default function Home() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [theme, setTheme] = useState("prism");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const onHtmlChange = (e) => {
    setHtmlCode(e.target.value);
  };

  const onCssChange = (e) => {
    setCssCode(e.target.value);
  };

  const onThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <Head>
        <title>HTML/CSS Compiler</title>
      </Head>
      <div className={`container mx-auto my-4 p-4 rounded-md shadow-lg ${theme}`}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">HTML/CSS Compiler</h1>
          <div>
            <label htmlFor="theme-select" className="mr-2 font-medium">Theme: </label>
            <select id="theme-select" onChange={onThemeChange} value={theme} className="bg-white text-gray-800 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="prism">Default</option>
              <option value="prism-okaidia">Okaidia</option>
              <option value="prism-tomorrow">Tomorrow</option>
            </select>
          </div>
        </div>
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
