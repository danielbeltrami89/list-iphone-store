import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "./Utils/Firebase";
import axios from 'axios';


export default function Body() {

    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        fetchCSVData();    // Fetch the CSV data when the component mounts
    }, []); // The empty array ensures that this effect runs only once, like componentDidMount

    const fetchCSVData = () => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRjzrX_L2MxxxDy8eZg2uq-6IfOlMaHNfdpHoc0ZWDI3CHpU6QDqER-NOeAyW-pk7ZH2fpwJPr8GeKa/pub?gid=206684609&single=true&output=csv'; // Replace with your Google Sheets CSV file URL

        axios.get(csvUrl)    // Use Axios to fetch the CSV data
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);        // Parse the CSV data into an array of objects
                setCsvData(parsedCsvData);        // Set the fetched data in the component's state
                // console.log(parsedCsvData);        // Now you can work with 'csvData' in your component's state.
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/);        // Use a regular expression to split the CSV text into rows while handling '\r'
        const headers = rows[0].split(',');        // Extract headers (assumes the first row is the header row)
        const data = [];        // Initialize an array to store the parsed data
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');          // Use the regular expression to split the row while handling '\r'
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
        }
        return data;
    }

    console.log(csvData[0])

    const list = csvData.map(
        (iphone, index) => 
        <ProductCard 
            key={index} 
            image={iphone.image} 
            name={iphone.model} 
            price={iphone.price} 
            capacity={iphone.capacity} 
            colors={iphone.color}
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