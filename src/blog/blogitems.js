import React from 'react';
import * as Markdown from 'react-markdown';
import PageContent from '../pageContent';
import { Link } from 'react-router-dom';

const BlogItem = (props) => (
  <div className="box content">
    <h1>{props.title}</h1>
       <Markdown source={props.content.split(" ").splice(0,150).join(" ").concat('...')} />
  <div>
  </div>
  </div>
)
export default BlogItem;
