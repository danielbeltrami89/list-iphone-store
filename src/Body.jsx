import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "./Utils/Firebase";

export default function Body() {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        const starCountRef = ref(db, 'iphones/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            
            if (data) {
                setDados(Object.values(data));
            }

        });

        return () => {
            //db.off(starCountRef);
        }

    },[])

    const list = dados.map(
        (iphone, index) => 
        <ProductCard 
            key={index} 
            image={iphone.image} 
            name={iphone.name} 
            price={iphone.price} 
            capacity={iphone.capacity} 
            color={iphone.color}
        />
    )

    return(
        <div style={style.cards}>
            {list}
        </div>
    );
}

const style = {
      cards: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '120px 30px',
        justifyContent: 'center'
      }
}