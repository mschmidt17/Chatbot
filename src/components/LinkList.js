import React from "react"
import "./CSS/linkList.css";




const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="item">
        <a
            href={link.url}
            rel="noopener noreferrer"
            className="url"
        > {link.text} </a>
    </li>
  ));

  return <ul className="list">{linkMarkup}</ul>;
};

export default LinkList;