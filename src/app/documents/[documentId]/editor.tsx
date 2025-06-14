"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import Link from "@tiptap/extension-link";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import ImageResize from "tiptap-extension-resize-image";
import { useEditorStore } from "@/store/use-editor-store";
import TextAlign from "@tiptap/extension-text-align";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";

function Editor() {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },

    editorProps: {
      attributes: {
        style: "padding-left:56px; padding-right:56px;",
        class:
          "focus:outline-none bg-white border border-[#c7c7c7] print:border-0 flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: "https",
      }),
      TaskList,
      FontFamily,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      TextStyle,
      TaskItem.configure({ nested: true }),
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Image,
      ImageResize,
      Underline,
    ],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,
  });
  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default Editor;
