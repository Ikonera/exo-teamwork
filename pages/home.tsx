import Image from 'next/image'
import styles from '../styles/Home.module.css'
import next, { NextPage } from 'next'


const Home: NextPage = () => {
    return (
        
        <Header/>

        <section>

            <div>
                <h2> Home </h2>   
            </div> 

            <div>
                Salut vois etes dans la page d'accueil.
            </div> 

        </section>
        
        <Footer/>

        )
    }
    
    export default Home