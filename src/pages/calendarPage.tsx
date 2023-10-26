import { useEffect } from 'react'
import { redirect } from 'react-router-dom'
import Navbar from '../components/navbar'
import Calendar from '../components/Calendar';
import CalendarNew from '../components/CalendarNew'
import {Credentials } from '../types/types'

export default function CalendarPage(props: {credentials: Credentials | undefined}){
    
    useEffect(() => {
        if (!props.credentials){
            redirect('/sign-in')
        }
    })
    
    return (
        <div style={styles.container}>
            <Navbar/>
            <Calendar/>
            { /* <CalendarNew/> */ }
        </div>
    )
}


const styles = {
    container : {
        textAlign: "center" as const
    }
}