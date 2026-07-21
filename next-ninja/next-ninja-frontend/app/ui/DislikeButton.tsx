"use client"

const DislikeButton = ({ blogslug }: { blogslug: string }) => {
    return (
        <button onClick={() => { console.log(`Dislike clicked for blog: ${blogslug}`) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> Dislike</button>
    )


}

export default DislikeButton
