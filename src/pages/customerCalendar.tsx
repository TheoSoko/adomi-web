import Navbar from '../components/navbar'
import Calendar from '../components/Calendar';


export default function customerCalendar (){
    
    
    return (
        <div style={styles.container}>
            <Navbar/>
            <Calendar/>
        </div>
    )
}


const styles = {
    container : {
        textAlign: "center" as const
    }
}