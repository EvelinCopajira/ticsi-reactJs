import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import CarouselHome from "../../components/Carousel/Carousel";
import ButtonBases from "../../components/Banner/Banner";
import './Home.css';


const Home = () => {
    return (
        <div className='general-container'>
            <h1>HOME</h1>
            <CarouselHome />
            <ButtonBases />
            <div className="info-container">
                <div className="header-container">
                    <h2>ticsi</h2>
                    <h3>- tienda de plantas online -</h3>
                </div>
                <p>Llevá la naturaleza al interior de tu casa y sentí como mejora tu estado de ánimo. Las plantas tienen muchos beneficios para la salud ya que purifican el aire, te conectan con la naturaleza e impulsan tu creatividad.</p>
            </div>
            <ItemListContainer />
        </div>
    )
}

export default Home;