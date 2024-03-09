// TODO: FIX TYPES!

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import EditorJSHTML from "editorjs-html";
import { type ComponentProps } from "react";

import { parseEditorJSData } from "../../lib/richText";
import { cn } from "../../lib/utils";
import { type Maybe } from "@/lib/types";

export interface RichTextProps extends ComponentProps<"article"> {
  jsonStringData: Maybe<string>;
}

export function RichText({ jsonStringData, className, ...props }: RichTextProps) {
  const data = parseEditorJSData(jsonStringData);
  const editorHtml = EditorJSHTML();

  if (!data) {
    return null;
  }

  return (
    <article
      className={cn("[&>*]:mt-0", className)}
      {...props}
      dangerouslySetInnerHTML={{
        __html: editorHtml.parse(data).join(""),
      }}
    />
  );
}
