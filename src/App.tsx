import { QuillEditor } from "./components/QuillEditor";
import { TiptapEditor } from "./components/TiptapEditor";

function App() {
  return (
    <main>
      <h1>React Quill Example</h1>
      <QuillEditor />

      <h1>TipTap Example</h1>
      <TiptapEditor />
    </main>
  );
}

export default App;
