import styles from './Netflix.module.css';
import NavBar from "../../components/NavBar";
import React from 'react';
import { useState, useEffect } from 'react';
import Table  from 'react-bootstrap/Table';
import NetflixRequests from '../../fetch/NetflixRequests';

function TabelaNetflix () {
    const [netflix, setNetflix] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setNetflix(await NetflixRequests.ListarNetflix());
        }

        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <h1>Tabela Netflix</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Titulo</th>
                        <th>País</th>
                        <th>Ano de lançamento</th>
                    </tr>
                </thead>
                <tbody>
                    {netflix.length > 0 ? (
                        netflix.map((netflix) => (
                            <tr key={netflix.show_id} netflix = {netflix}>
                                <td>{netflix.show_id}</td>
                                <td>{netflix.tipo}</td>
                                <td>{netflix.titulo}</td>
                                <td>{netflix.pais}</td>
                                <td>{netflix.ano_lancamento}</td>
                            </tr>
                        )
                        )) : (
                        <tr>Carregando... Verifique se o servidor está funcionando</tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TabelaNetflix;