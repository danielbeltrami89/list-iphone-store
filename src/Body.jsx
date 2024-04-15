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

        axios.get(csvUrl)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);  
                setCsvData(parsedCsvData);    
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/);
        const headers = rows[0].split(',');
        const data = [];
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
        }
        return data;
    }

    let transformedResult = transformResult(csvData);

    console.log(transformedResult)

    const list = transformedResult.map(
        (iphone, index) => {
            if (iphone.image != "" && iphone.prices.some(item => item.status === 'DISPONIVEL')) {
                return(
                <ProductCard 
                    key={index} 
                    image={iphone.image} 
                    name={iphone.model} 
                    prices={iphone.prices} 
                    capacity={iphone.capacity} 
                    colors={iphone.color}
                />
                );
            }
        }
    );

    return(
        <div style={style.cards}>
            {list}
        </div>
    );

    // Função para agrupar por modelo e combinar capacidades e preços
    function transformResult(result) {
        let groupedResult = {};

        result.forEach(item => {
            if (!groupedResult[item.model]) {
                groupedResult[item.model] = {
                    model: item.model,
                    prices: []
                };
            }

            if (item.status === 'DISPONIVEL') {
                groupedResult[item.model].prices.push({
                    capacity: item.capacity,
                    price: item.price,
                    status: item.status,
                });
            }
            
            // Manter outras propriedades (imagem, status, cor) iguais para todos os itens do mesmo modelo
            groupedResult[item.model].image = item.image;
            groupedResult[item.model].color = item.color;
        });

        return Object.values(groupedResult);
    }

}

const style = {
      cards: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '120px 30px',
        justifyContent: 'center'
      }
}