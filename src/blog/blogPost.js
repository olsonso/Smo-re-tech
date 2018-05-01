import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import * as Markdown from 'react-markdown'
import PageContent from './../components/PageContent'

const BlogPost = ({ location: { state: { props } }}) => {
  return (
    <PageContent>
      <nav className="level">
        <div className="level-left">
          <Link className="level-item button is-small is-link is-outlined" to="/blog">Back to Blog</Link>
        </div>
        <div className="level-right">
          <p className="level-item has-text-link is-size-7">    {moment(props.date).calendar(null, {
            sameDay: '[Today]',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MMM Do YYYY'
          })}
          </p>
        </div>
      </nav>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.icon} alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h1>{props.title}</h1>
            <Markdown source={props.content} />
          </div>
        </div>
      </article>
    </PageContent>
  )
}
export default BlogPost
