import Navbar from '../components/navbar'
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Credentials, User, shortCarer} from '../types/types'
import { JsxElement } from 'typescript';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import axios from 'axios';
import Box from '@mui/material/Box';




export default function Carers(props: {credentials:Credentials}){
    const [cred, setCred] = useState<Credentials>()
    const [user, setUser] = useState<User>()
    const [error, setError] = useState<string>()
    const [first, setFirst] = useState<boolean>(true)
    const [carersList, setCarersList] = useState('')

    // const url ="http://localhost:8000/customers/"+props.credentials.id+"/carers"
    const url ="http://localhost:8000/customers/1/carers"


    // function createData(
    //     idCarer: number,
    //     first_name: string,
    //     last_name: string,
    //     phone: string
    //   ) {
    //     return { idCarer, first_name, last_name, phone};
    //   }

    const fetchAllCarers = () => {
        axios.get(url)
        .then((response) => {
            const carersData = response.data
            setCarersList(carersData)
        })
        .catch(error => console.log(error))
        
    }



    useEffect(() => {
        return setCred(props.credentials)
    }, [])

    useEffect(() => {
        return fetchAllCarers()
    }, [])
    
    
     console.log(carersList);

    if(Array.isArray(carersList)){
    

        return (
            <div style={styles.container}>
                <Navbar/>
                <p style={styles.title}>page carers tab</p>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh" >
                    <div>
                        <TableContainer component={Paper}>
                        <Table sx={{ maxWidth: 650}} aria-label="simple table">
                            <TableHead>
                            <TableRow >
                                <TableCell>Nom</TableCell>
                                <TableCell align="right">Prénom</TableCell>
                                <TableCell align="right">Téléphone</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {carersList.map((carer) => (
                                <TableRow
                                key={carer.idCarer}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {carer.carer.last_name}
                                </TableCell>
                                <TableCell align="right">{carer.carer.first_name}</TableCell>
                                <TableCell align="right">{carer.carer.phone}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </div>
                </Box>
            </div>
        )
    }

    return(
        <div style={styles.container}>
                <Navbar/>
                <p style={styles.paragraph}>page carers</p>

                

            </div>
    )
}


const styles = {
    container : {
        textAlign: "center" as const,
        margin:'auto'
        
    },
    title : {
        marginBlockStart: 60,
        marginBlockEnd: 50,
        fontSize: 37, 
    },
    paragraph : {
        marginBlockStart: 75,
        marginBlockEnd: 50,
        marginInline: 'auto',
        fontSize: 20, 
    },
    infoList: {
        display: 'flex', 
        flexDirection: 'column' as any, 
        justifyContent: 'left', 
        margin:'auto'
    },
    infoListItem: {
        listStyleType: 'none', 
        marginBlock: 2.5,
        fontSize: 19,
    },
    listProperty: {
        fontWeight: '600', 
        paddingRight: 5
    },
    listValue: {
    }
}
