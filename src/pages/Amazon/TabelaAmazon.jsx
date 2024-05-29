import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AmazonRequests from '../../fetch/AmazonRequests';
import NavBar from '../../components/NavBar';
import React from 'react';
import styles from './Amazon.module.css';


function TabelaAmazon () {
    const [amazon, setAmazon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setAmazon(await AmazonRequests.listarAmazon());
        }
        console.log(amazon);
        fetchData();
    }, []);

    
    return (
        <>
            <NavBar />
            <h1>Tabela Amazon</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id_livro</th>
                        <th>data_venda</th>
                        <th>nome_produto</th>
                        <th>edicao</th>
                    </tr>
                </thead>
                <tbody>
                    {amazon.length > 0 ? (
                        amazon.map((amazon) => (
                            <tr key={amazon.id_livro}>
                                <td>{amazon.id_livro}</td>
                                <td>{amazon.data_venda}</td>
                                <td>{amazon.nome_produto}</td>
                                <td>{amazon.edicao}</td>
                            </tr>
                        )
                        )) : (
                        <tr>
                        <td colSpan="6">Carregando... Verifique se o servidor está funcionando</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TabelaAmazon;