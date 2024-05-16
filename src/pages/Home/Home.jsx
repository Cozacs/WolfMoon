import './Home.css';
import Header from '../../Components/Header/Header';
import { useEffect, useState } from 'react';

export default function Home () {

    const [show, setShow] = useState(true);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const handleAnimation = () => {
        setShow(true)
    }

    useEffect(() => {
        handleAnimation();
    }, []);
    useEffect (() => {//armazena os dados x e y do mouse em relação ao centro
        const handleMouseMove = (event) => {
            setMousePosition({x: event.clientX-window.innerWidth/2, y: event.clientY-window.innerHeight/2})
        }
        window.addEventListener('mousemove', handleMouseMove);
    })

    return (
        <>
        <Header />
        <main>
            <img src="assets/BackGroundSky.png" alt="Sky" className={show ? 'b1 down' : 'b1'} />
            <img src="assets/BackGroundMoon.png" alt="Moon" className={show ? 'b2 up1' : 'b2'} />
            <img src="assets/BackGroundFlorest.png" alt="Florest" className={show ? 'b3 up2' : 'b3'} />
        </main>
        <footer>
            <p>Created by Cozacs</p>
        </footer>
        </>
    );
}