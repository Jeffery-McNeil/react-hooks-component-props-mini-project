import Article from "./Article"

function ArtcileList (props) {
    return(
        <main>
            {props.posts.map(post =>{
                return(
                    <Article key= {post.id} title={post.title}
                    date= {post.date} preview= {post.preview}
                    minutes= {post.minutes} />
                )
            })}
        </main>
    )
}

export default ArtcileList