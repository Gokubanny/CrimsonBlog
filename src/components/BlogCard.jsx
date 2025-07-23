import React from "react";
import './BlogCard.css';


const BlogCard = ({ image, title, author, date, excerpt, img}) => {
    return (
        <>
            <div className="blog-card">
                <img src={image} alt={title} className="blog-card-image" />
                <div className="blog-card-content">
                    <p className="blog-card-excerpt">{excerpt}</p>
                    <div className="blog-card-dig">
                    <img
                        src={img}
                        alt="author"
                        className="author-img blog-card-img"
                    />
                    <div className="blog-card-aug">
                        <p className="blog-card-excerpt">{author}</p>
                        <p className="blog-card-date">{date}</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogCard;