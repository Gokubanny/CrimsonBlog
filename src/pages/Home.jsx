import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import "../App.css"



const Home = () => {
    const cards = useSelector((state) => state.cards.cards);

    return (
        <div className="home">
            <h1>Latest Post</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '2rem' }}>
                {cards.map(card => (
                    <BlogCard key={card.id} {...card} />
                ))}
            </div>

        </div>

    );
};

export default Home;