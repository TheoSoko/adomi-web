import Navbar from '../components/navbar'

export default function HomePage(){
    return(
        <div style={styles.container}>
            <Navbar/>
            <h1 style={styles.title}>Bonjour</h1>
            <p style={styles.paragraph}>A Do Mi est une société de services professionnels d'auxiliaires de vie à domicile. Elle apporte son aide aux personnes en situation de dépendance (troisième âge, handicap…).</p>
        </div>
    )
}

const styles = {
    container : {
        textAlign: 'center' as const
    },
    title : {
        marginBlockStart: 60,
        marginBlockEnd: 50,
        fontSize: 37, 
    },
    paragraph : {
        marginBlockStart: 75,
        marginBlockEnd: 50,
        marginInline: 260,
        fontSize: 20, 
    },
}
