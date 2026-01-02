import './styles/Main.css'

const Main = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__kicker">Save the date</span>
        <h1 className="hero__title">Ảnh ấy &amp; Chỉ Ấy</h1>
        <div className="hero__date">20 tháng 1 2026</div>
        <button className="hero__cta" type="button">
          Gửi lời chúc
        </button>
      </div>
    </section>
  )
}

export default Main
