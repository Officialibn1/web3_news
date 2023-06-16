import './styles/MainSection.css'
import MainContent from './MainContent';
import Recomendations from './Recomendations';
import SideNav from './SideNav';

const MainSection = () => {
    return (
        <div className="mainSection">
            <SideNav />

            <MainContent />

            <Recomendations />
        </div>
    );
}

export default MainSection;
