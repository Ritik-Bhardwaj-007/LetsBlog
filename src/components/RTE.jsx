import React from 'react'
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({name,control,label,defaultValue=""}){
    return (
        <div className="w-full">
            {label && <label className="text-sm text-gray-600">
                {label}
                </label>}
            <Controller
            name={name || "content"}
            control={control}
            render={({field:{onChange}})=>(
                <Editor
                apiKey='ke5ronjvelbuzel5zipmm7e78li69c90s4gzeg9dez3zb8gu'
                intialValue={defaultValue}
                init={{
                    height:450,
                    menubar:false,
                    plugins:[ "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",],
                    toolbar:
                       "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                       content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={onChange}
                />
            )}
            />
        </div>
    )
}