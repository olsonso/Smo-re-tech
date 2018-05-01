import React from 'react';
import * as contentful from 'contentful';
import BlogItem from './blog/blogitems';
import PageHeader from './pageHeader';

class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'bbzmqnz16iiz',
    accessToken: '6b7f2e3e80b2b842511f3354bc40789475aaab65be7d6975f9a200621dc7a1ee'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
      console.log(response.items);
  }
  render() {
    return (
      <div>
      <PageHeader color="is-info" title="Smo're Tech">
Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
</PageHeader>
        <br/>
        { this.state.posts.map(({fields}, i) =>

         <BlogItem key={i} {...fields} />

        )}
      </div>
    )
  }
}
export default Blog;
