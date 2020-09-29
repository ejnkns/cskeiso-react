import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
import {Para, Link, ContentObject, ContentTypes } from "./ContentTypes";
import { OneColumnProps } from "./propTypes";
import Player from "./Player";

type ContentArray = {
    content: ContentObject[] 
}

function OneColumn(props: OneColumnProps) {
    return (
        <div>
            <Header page={props.page} />
            <Content content={props.content} />
            <Footer />
        </div>
    );
}

function Content({ content }: ContentArray) {
    //let contentDiv: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> = <div></div>
    // might have to change type to React.FC
    let children: JSX.Element[] = [<div className="content-parent"></div>]
    for (let e of content) {
        children.push(makeDiv(e));
    }
    return (
        <div>
            {children}
        </div>
    );
}

function makeDiv(content: ContentObject): JSX.Element {
    let value = content.data;
    switch (content.contentType) {
        case ContentTypes.Title: { 
            return(
                <h1>{value}</h1>
            );
        }
        case ContentTypes.Para: {
            if (value instanceof Para) {

                let children: React.ReactNode[] = [];

                value.content.forEach(element => {
                    if (element instanceof Link) {
                        //React.createElement("a", { target: "_blank", rel: "nooperner noreferrer", href: {}) 
                        children.push(
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={element.url}
                            >&nbsp;{element.text}&nbsp;</a>
                        )
                    } else if(element === "(line break)") {
                        children.push("BREAK")
                    } else {
                        children.push(element);
                    }
                });
                let rootP = React.createElement("p", { className: "" }, ...children);
                return (rootP);
            }
            return (<div/>);
        }
        case ContentTypes.Link: { 
            let url: string, text: string;
            if (value instanceof Link) {
                url = value.url;
                text = value.text;
                return(
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={url}
                    >
                        &nbsp;{text}&nbsp;
                    </a>
                );
            } else {
                console.error("wrong type to Link in OneColumn")
                break;
            }
        }
        case ContentTypes.Image: { 
            if (typeof (value) == "string") {
                return (
                    <img alt="" src={value} />
                );
            } else {
                console.error("wrong type to Image in OneColumn")
                break;
            }
        }
        case ContentTypes.Video: {
            if (typeof (value) == "string") {
                return (
                    <Player url={value}/>
                );
            } else {
                console.error("wrong type passed to Player in OneColumn")
                break;
            }
        }
        case ContentTypes.Pdf: { 
            return(
                <div></div>
            );
        }
        case ContentTypes.Html: { 
            return(
                <div/> 
            );
        }
        case ContentTypes.Break: { 
            return(
                <br /> 
            );
        }
        default: {
            return (
                <div>
                    {value}
                </div>
            );
        }
    }
    return (<div>hi</div>);
}

export default OneColumn;