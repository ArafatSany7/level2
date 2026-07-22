

const MyServerComponent = async () => {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postData = await post.json();
    console.log(postData)
    return (
        <div>
            My server Components
        </div>
    )
}

export default MyServerComponent
