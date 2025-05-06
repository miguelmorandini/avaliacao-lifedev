import styles from "./Post.module.css"

import { useFetchDocument } from "../../hooks/useFetchDocument"
import { useParams } from "react-router-dom"

const Post = () => {
    const {id} = useParams()
    const {document: post} = useFetchDocument("posts", id)

  return (
    <div className="styles.post_container">
      {post && (
        <>
        <h1></h1></>
      )}
    </div>
  )
}

export default Post
