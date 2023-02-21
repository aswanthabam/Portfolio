import TopBar from '../TopBar/TopBar';
import './Main.css';

export default function Main({children}) {

    return (
        <div className='main'>
            <TopBar>

            </TopBar>
            {children}
        </div>
    );
}