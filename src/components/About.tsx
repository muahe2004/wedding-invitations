import { FaHeart } from 'react-icons/fa6'
import './styles/About.css'

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <img className='about-img' src="../../public/anhCuoi.jpg"></img>
                <img className='about-img' src="../../public/anhCuoi.jpg"></img>

                <div className='about-icon'>
                    <FaHeart />
                </div>
            </div>
        </section>
    )
}

export default About
