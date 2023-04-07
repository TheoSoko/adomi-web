import Navbar from '../components/navbar'
import Calendar from '../components/Calendar';
import CalendarNew from '../components/CalendarNew'


export default function CustomerCalendar(){
    
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