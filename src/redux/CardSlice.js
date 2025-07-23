import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [
    {
      id: 1,
      image: "/src/assets/island.png",
      author: "Marvellous O.",
      img: "/src/assets/profile1.png",
      date: "July 22, 2025",
      excerpt: "The Impact of Technology on the Workplace: How Technology is Changing"
    },
    {
      id: 2,
      image: "/src/assets/city.png",
      author: "Omatule M.",
      img: "/src/assets/profile2.png",
      date: "July 21, 2025",
      excerpt: "A deep dive into the latest features of React and Vue."
    },
    {
        id: 3,
        image: "/src/assets/girl.png",
        author: "Marvellous O.",
        date: "July 22, 2025",
        img: "/src/assets/profile3.png",
        excerpt: "Explore the key principles behind effective UI design..."
      },
      {
        id: 4,
        image: "/src/assets/house.png",
        author: "Omatule M.",
        img: "/src/assets/profile4.png",
        date: "July 21, 2025",
        excerpt: "A deep dive into the latest features of React and Vue."
      },
      {
        id: 5,
        image: "/src/assets/rock.png",
        img: "/src/assets/profile5.png",
        author: "Marvellous O.",
        date: "July 22, 2025",
        excerpt: "Explore the key principles behind effective UI design..."
      },
      {
        id: 6,
        image: "/src/assets/car.png",
        author: "Omatule M.",
        img: "/src/assets/profile1.png",
        date: "July 21, 2025",
        excerpt: "A deep dive into the latest features of React and Vue."
      },
      {
        id: 7,
        image: "/src/assets/phone.png",
        img: "/src/assets/profile2.png",
        author: "Marvellous O.",
        date: "July 22, 2025",
        excerpt: "Explore the key principles behind effective UI design..."
      },
      {
        id: 8,
        image: "/src/assets/sea.png",
        img: "/src/assets/profile3.png",
        author: "Omatule M.",
        date: "July 21, 2025",
        excerpt: "A deep dive into the latest features of React and Vue."
      },
      {
        id: 9,
        image: "/src/assets/pad.png",
        img: "/src/assets/profile4.png",
        author: "Omatule M.",
        date: "July 21, 2025",
        excerpt: "A deep dive into the latest features of React and Vue."
      }
  ]
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    }
  }
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
