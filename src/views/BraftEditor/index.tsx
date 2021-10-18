// import { useRef, useState } from 'react';
// import BraftEditor from 'braft-editor';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'braft-editor/dist/index.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/mode/javascript/javascript';

const Editor = () => {
  // const braftEditorRef = useRef();
  // const [code, setCode] = useState<string>('const a = "Hello Monaco"');
  // const options = {
  //   selectOnLineNumbers: true,
  // };

  // const handleChange = (val: any) => {
  //   console.log(val);
  // };

  return (
    <div className="editor-box">
      {/* <BraftEditor value={braftEditorRef.current} onChange={handleChange} /> */}

      <CodeMirror
        value='const a = "Hello Monaco"'
        options={{
          mode: 'javascript',
          theme: 'rubyblue',
        }}
        onChange={(editor, data, value) => {
          //
        }}
      />
    </div>
  );
};

export default Editor;
