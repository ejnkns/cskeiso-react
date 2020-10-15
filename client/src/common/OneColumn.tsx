import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
import {Para, Link, ContentObject, ContentTypes } from "gdocs-database";
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
        console.log(e);
        
        if (e) {
            children.push(makeDiv(e));
        } else {
            console.error("Element '" + e + "' of content is null");
        }
    }
    return (
        <div>
            {children}
        </div>
    );
}
/*
function makeKey(input: any): string {
    return (input + (new Date().toTimeString));
}
*/

function makeDiv(content: ContentObject): JSX.Element {
    let value = content.data;
    console.log(value.constructor.name);
    
    switch (content.contentType) {
        case ContentTypes.Title: { 
            return(
                <h1>{value}</h1>
            );
        }
        case ContentTypes.Para: {
            if (value instanceof Para) {
                console.log("value is para\n" + typeof(value));
                let children: React.ReactNode[] = [];
                value.content.forEach(element => {
                    if (element instanceof Link) {
                        children.push(
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={element.url}
                            >{element.text}</a>
                        )
                    } else if(element === "(line break)") {
                        children.push(<br/>)
                    } else {
                        children.push(element);
                    }
                });
                let rootP = React.createElement("p", { className: "" }, ...children);
                return (rootP);
            } else {
                return (<div>value not instance of Para</div>);
            }
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
                        {text};
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