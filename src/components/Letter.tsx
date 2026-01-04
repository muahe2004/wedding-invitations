import { useEffect, useRef, useState } from 'react'
import './styles/Letter.css'

const Letter = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className={`letter${isVisible ? ' is-visible' : ''}`}
        >
           <div className="letter-content">
                <div className="letter-invitation">
                    <h2 className='letter-title'>------ THIỆP MỜI ------</h2>

                    <p className="letter-p">Vợ chồng Minh và Ai đó xin chào mọi người</p>

                    <p className="letter-p">
                        Kính mời bạn đến tham dự tiệc cưới của hai vợ chồng Minh và Ai đó.
                    </p>

                    <p className="letter-p">
                        Nếu bạn nhận được lời mời này – nghĩa là bạn là một người quan trọng trong cuộc sống của hai vợ chồng mình.
                    </p>

                    <p className="letter-p">
                        Vợ chồng mình quen nhau một cách tình cờ – và quyết định cưới nhau là do định mệnh. Hai đứa đã trải qua một hành trình không quá dài nhưng đầy sự kiện.
                    </p>

                    <p className="letter-p">
                        Ở hành trình đó có cả những suy nghĩ chín chắn, nghiêm túc của người trưởng thành và có cả tình yêu cháy bỏng của hai trái tim vẫn biết yêu, vẫn lãng mạn như yêu lần đầu tiên.
                    </p>

                    <p className="letter-p">
                        Vợ chồng mình tìm thấy ở nhau sự tương đồng, chọn kết hôn với nhau vì tin rằng cả hai sẽ làm cho nhau tốt hơn mỗi ngày.
                    </p>

                    <p className="letter-p">
                        Có một người bạn cũng là đối tác lâu năm đã nói rằng Minh là hai màu rõ ràng trắng và đen – còn Ai đó thêm màu sắc vào cho cuộc đời của Minh.
                    </p>

                    <p className="letter-p">
                        Cảm ơn bạn đã đang và sẽ là một phần trong cuộc sống của hai vợ chồng mình.
                    </p>

                    <p className="letter-p">
                        Kính mời bạn đến dự ngày trọng đại nhất của hai vợ chồng!
                    </p>
                    </div>


                <div className="letter-images">
                    <img className='letter-img letter-img1' src="/letter1.jpg" alt="" />
                    <img className='letter-img letter-img2' src="/letter2.jpg" alt="" />
                    <img className='letter-img letter-img3' src="/letter3.jpg" alt="" />
                </div>
           </div>
        </section>
    )
}

export default Letter
