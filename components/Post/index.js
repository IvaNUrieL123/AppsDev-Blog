import React from 'react'
import { Link } from '../../routes'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link route='post' params={{ slug: post.title }}>
      <a>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
