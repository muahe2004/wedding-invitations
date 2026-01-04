import { useState } from "react";
import "./styles/Greeting.css";

const FORM_URL = "https://formsubmit.co/lyvanminh280504@gmail.com";

const Greeting = () => {
  const [name, setName] = useState("");
  const [greetion, setGreetion] = useState("");

  const handleSendGreetion = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", greetion);
    formData.append("_subject", "Có lời chúc mới 💌");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    await fetch(FORM_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    setName("");
    setGreetion("");
    alert("Đã gửi lời chúc 💖");
  };

  return (
    <section className="greeting">
      <div className="greeting-card">
        <h2 className="greeting-title">------ GỬI LỜI CHÚC ------</h2>

        <form className="greeting-form" onSubmit={handleSendGreetion}>
          <label className="greeting-field">
            <input
              type="text"
              placeholder="Nhập tên của bạn..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
            />
          </label>

          <label className="greeting-field">
            <textarea
              rows={4}
              placeholder="Viết lời chúc..."
              value={greetion}
              onChange={(e) => setGreetion(e.target.value)}
              required
              name="message"
            />
          </label>

          <button type="submit" className="greeting-submit">
            Gửi lời chúc
          </button>
        </form>
      </div>
    </section>
  );
};

export default Greeting;
