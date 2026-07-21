import DislikeButton from '@/app/ui/DislikeButton';
import React from 'react'

const BlogSlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    return (
        <div>
            Blog slug page: {slug}




            <DislikeButton blogslug={slug} />
        </div>
    )
}

export default BlogSlugPage
