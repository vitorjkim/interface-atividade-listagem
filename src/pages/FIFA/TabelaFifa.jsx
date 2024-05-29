import styles from './FIFA.module.css';
import NavBar from "../../components/NavBar";
import React from 'react';
import { useState, useEffect } from 'react';
import Table from'react-bootstrap/Table';
import FifaRequests from '../../fetch/FifaRequests';


function TabelaFifa () {
    const [fifa, setFifa] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setFifa(await FifaRequests.ListarFifa());
        }

        fetchData();
    },[]);
    return (
        <>
            <NavBar />
            <h1>Tabela FIFA</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Pé dominante</th>
                        <th>Posição</th>
                        <th>OVR</th>
                    </tr>
                </thead>
                <tbody>
                    {fifa.length > 0 ? (
                        fifa.map((fifa) => (
                            <tr key={fifa.playerid} fifa= {fifa}>
                                <td>{fifa.playerid}</td>
                                <td>{fifa.playername}</td>
                                <td>{fifa.foot}</td>
                                <td>{fifa.playerposition}</td>
                                <td>{fifa.ovr}</td>
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

export default TabelaFifa;