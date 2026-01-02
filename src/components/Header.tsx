import { FaHeart } from 'react-icons/fa6'

const Header = () => {
  return (
    <header className="wedding-header">
      <span className="wedding-name">Ảnh ấy</span>
      <span className="wedding-heart" aria-hidden="true">
        <FaHeart />
      </span>
      <span className="wedding-name">Chỉ Ấy</span>
    </header>
  )
}

export default Header
