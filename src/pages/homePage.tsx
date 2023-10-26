import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HomeStyle from '../css/HomeStyle.module.css'

export default function HomePage(){
    return(
        <div className={HomeStyle.container}>

            <Navbar/>
            
            <div className={HomeStyle.subContainer1}>

                <div className={HomeStyle.section1}>
                    <h1 className={HomeStyle.title}>Bonjour</h1>

                    <p className={HomeStyle.paragraph}>A Do Mi est une société de services professionnels d'auxiliaires de vie à domicile. Elle apporte son aide aux personnes en situation de dépendance (troisième âge, handicap…).</p>

                    <p className={HomeStyle.paragraph}>Vous pouvez découvrir notre offre d'accompagnement ici, et prendre un rendez-vous téléphonique ou en agence avec l'un de nos employés, afin en savoir plus.</p>
                </div>

            </div>

            <div className={HomeStyle.subContainer2}>

                <div className={HomeStyle.section2}>
                    <h2 className={HomeStyle.title2} id='why-join-us'>Pourquoi A Do Mi ?</h2>

                    <p className={HomeStyle.paragraph2}>
                        Le nom d'A Do Mi, vient de la locution Aide à Domicile, car il s'agit du service dans lequel
                        l'entreprise se spécialise. Nous sommes situés en région parisienne, dans laquelle se situent nos
                        trois agences.
                    </p>

                    <p className={HomeStyle.paragraph2}>
                        Nous serions ravis de vous accueillir, si vous souhaitez échanger sur vos besoins ou ceux de vos proches.
                        Vous découvrirez notre philosophie, qui place l'{false && "argent "}humain avant tout, et nous espérons
                        que vous nous rejoignerez et nous donnerez votre {false && "argent et votre "}confiance.
                    </p>
                </div>

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
    subContainer1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(/background-home/b.jpg)",
        backgroundSize:"cover",
        height: "725px",
        backgroundPositionY: "3.5rem",
        backgroundRepeat: "no-repeat",
    },
    subContainer2:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    section1: {
        backgroundColor: 'rgba(220, 220, 220, 0.75)',
        width: "70%",
        height:'50%',
        borderRadius: 7,
        "@media (maxWidth: 900px)": {
            // fontSize: "10rem"
            backgroundColor: 'blue'
    
          },
    },
    title : {
        fontSize: 45, 
    },
    paragraph : {
        width:"85%",
        margin:"0px auto",
        fontSize: 21.5,  
        fontWeight: '600',
        marginBottom: "1.3rem",
        textWrap: "wrap"
    },
    section2: {
        width: "80%",
        marginBottom: "3rem",
    },
    title2: {
        fontSize: 24.5, 
        marginBlockStart: 52,
        marginBlockEnd: 40,
    },
    paragraph2 : {
        margin:"0px auto",
        width: "80%",
        fontSize: 20, 
        fontWeight: '500',
        marginBottom: "1.3rem"
    },

}
