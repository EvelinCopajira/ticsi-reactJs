import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CarouselHome from "../components/Carousel/Carousel";

const Home = () => {
    return (
        <div className='general-container'>
            <h1>HOME</h1>
            <CarouselHome />
            {/* <ItemListContainer>
            </ItemListContainer> */}
        </div>
    )
}

export default Home;