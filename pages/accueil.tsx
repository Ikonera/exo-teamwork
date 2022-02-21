import { NextPage } from 'next'
import Header from './header'
import Footer from './footer'



const Accueil: NextPage = () => {
    return (
        <>
        <Header/>

        <section>

            <div>
                <h2> Home </h2>   
            </div> 

            <div>
                <p>Salut vous etes dans la page d'accueil.</p>
            </div> 

        </section>
        
        <Footer/>
        </>
        )
    }
    
    export default Accueil