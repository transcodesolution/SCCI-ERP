import React, { useState, useRef, useMemo, memo } from 'react';
import JoditEditor from 'jodit-react';
import "jodit";
import "jodit/build/jodit.min.css";


const copyStringToClipboard = function (str) {
    var el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
};

const facilityMergeFields = [
    "FacilityNumber",
    "FacilityName",
    "Address",
    "MapCategory",
    "Latitude",
    "Longitude",
    "ReceivingPlant",
    "TrunkLine",
    "SiteElevation"
];
const inspectionMergeFields = [
    "InspectionCompleteDate",
    "InspectionEventType"
];
const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
    let optionGroupElement = document.createElement("optgroup");
    optionGroupElement.setAttribute("label", optionGrouplabel);
    for (let index = 0; index < mergeFields.length; index++) {
        let optionElement = document.createElement("option");
        optionElement.setAttribute("class", "merge-field-select-option");
        optionElement.setAttribute("value", mergeFields[index]);
        optionElement.text = mergeFields[index];
        optionGroupElement.appendChild(optionElement);
    }
    return optionGroupElement;
}
const buttons = [
    "undo",
    "redo",
    "|",
    "bold",
    "strikethrough",
    "underline",
    "italic",
    "eraser",
    "|",
    "ul",
    "ol",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
    "lineHeight",
    "superscript",
    "subscript",
    "|",
    "file",
    "image",
    "link",
    "video",
    "|",
    "spellCheck",
    "|",
    "cut",
    "copy",
    "paste",
    // "select all",
    "copyformat",
    "|",
    "table",
    "|",
    "align",
    "outdent",
    "indent",

    "|",
    "hr",
    "symbols",
    "|",
    "fullsize",
    "selectall",
    "print",
    "|",
    "source",
    "|",
    "classSpan",
    "|",
    "search",
    "preview",
    "about",
    {
        name: "insertMergeField",
        tooltip: "Insert Merge Field",
        iconURL: "images/merge.png",
        popup: (editor, current, self, close) => {
            function onSelected(e) {
                let mergeField = e.target.value;
                if (mergeField) {
                    console.log(mergeField);
                    editor.selection.insertNode(
                        editor.create.inside.fromHTML("{{" + mergeField + "}}")
                    );
                }
            }
            let divElement = editor.create.div("merge-field-popup");

            let labelElement = document.createElement("label");
            labelElement.setAttribute("class", "merge-field-label");
            labelElement.text = "Merge field: ";
            divElement.appendChild(labelElement);

            let selectElement = document.createElement("select");
            selectElement.setAttribute("class", "merge-field-select");
            selectElement.appendChild(
                createOptionGroupElement(facilityMergeFields, "Facility")
            );
            selectElement.appendChild(
                createOptionGroupElement(inspectionMergeFields, "Inspection")
            );
            selectElement.onchange = onSelected;
            divElement.appendChild(selectElement);

            console.log(divElement);
            return divElement;
        },
    },
    {
        name: "copyCont ent",
        tooltip: "Copy HTML to Clipboard",
        iconURL: "images/copy.png",
        exec: function (editor) {
            let html = editor.value;
            copyStringToClipboard(html);
        },
    },
];

const Editor = ({ onChange, value }) => {
    const editorConfig = useMemo(() => {
        return {
            readonly: false,
            toolbar: true,
            spellcheck: true,
            language: "en",
            toolbarButtonSize: "medium",
            toolbarAdaptive: false,
            showCharsCounter: true,
            showWordsCounter: true,
            showXPathInStatusbar: false,
            askBeforePasteHTML: true,
            askBeforePasteFromWord: true,
            buttons: buttons,
            uploader: {
                insertImageAsBase64URI: false,
                url: `${process.env.REACT_APP_BASE_URL}/upload/test`,
                format: 'json',
                headers: {
                    Authorization: "token",
                },
                isSuccess: function (e) {
                    return true;
                },
                process: function (resp) {
                    const newContent = `<img src="${resp.data.image}" alt="Image description" title="Image title">`;
                    onChange((prev) => prev + newContent)
                    return resp.data.image
                },
            },
            width: 800,
            height: 842
        }
    }, []);



    return (
        <div className="App" style={{ width: '100%' }}>
            <JoditEditor
                value={value}
                config={editorConfig}
                onChange={onChange}
            />
        </div>
    );
};
export default memo(Editor)