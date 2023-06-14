import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function HomePage(){
    return(
        <div style={styles.container}>
            <Navbar/>
            <div style={styles.background}>
                <div style= {styles.divForPadding}>
                    <div style={styles.presentation}>
                        <h1 style={styles.title}>Bonjour</h1>
                        <p style={styles.paragraph}>A Do Mi est une société de services professionnels d'auxiliaires de vie à domicile. Elle apporte son aide aux personnes en situation de dépendance (troisième âge, handicap…).</p>
                        <p style={styles.paragraph}>Vous pouvez découvrir notre offre d'accompagnement ici, et prendre un rendez-vous téléphonique ou en agence avec l'un de nos employés, afin en savoir plus.</p>
                    </div>
                </div>
            </div>
            <div style={styles.secondSection}>
                <h2 style={styles.title2} id='why-join-us'>Pourquoi A Do Mi ?</h2>
                <p style={styles.paragraph2}>
                    Le nom d'A Do Mi, vient de la locution Aide à Domicile, car il s'agit du service dans lequel
                    l'entreprise se spécialise. Nous sommes situés en région parisienne, dans laquelle se situent nos
                    trois agences.
                </p>
                <p style={styles.paragraph2}>
                    Nous serions ravis de vous accueillir, si vous souhaitez échanger sur vos besoins ou ceux de vos proches.
                    Vous découvrirez notre philosophie, qui place l'{false && "argent "}humain avant tout, et nous espérons
                    que vous nous rejoignerez et nous donnerez votre {false && "argent et votre "}confiance.
                </p>
            </div>

            <Footer/>
            
        </div>
    )
}

const styles = {
    container : {
        textAlign: "center" as const,
        backgroundColor: "rgb(235, 235, 235)"
    },
    background: {
        //marginBlockStart: -100,
        backgroundImage: "url(/background-home/b.jpg)",
        //display: "block",
        //backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height: "725px",
        backgroundPositionY: "3.5rem",
        backgroundRepeat: "no-repeat"
    },
    background2: {
        backgroundImage: "url(/background-home/toutPublic.jpg)",
        //display: "block",
        //backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height: "500px"
    },
    divForPadding: {
        paddingBlockStart: 110,
    },
    presentation: {
        backgroundColor: 'rgba(220, 220, 220, 0.83)',
        display: 'inline-block',
        paddingBlockStart: 17,
        paddingBlockEnd: 35,
        marginInline: 140,
        borderRadius: 7 
    },
    title : {
        fontSize: 45, 
    },
    paragraph : {
        paddingBlockStart: 15,
        marginInline: 190,
        fontSize: 21.5, 
        fontWeight: '600'
    },
    secondSection: {
        paddingBlockEnd: 50,
    },
    title2: {
        fontSize: 24.5, 
        marginBlockStart: 52,
        marginBlockEnd: 40,
    },
    paragraph2 : {
        marginInline: 240,
        fontSize: 20, 
        fontWeight: '500'
    },

}
