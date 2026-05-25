import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('訊息已送出，我們將盡快與您聯絡。');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="content-section" style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      backgroundColor: 'rgba(10, 15, 31, 0.7)',
      borderRadius: '8px',
      marginTop: '2rem',
      marginBottom: '2rem'
    }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-300">聯絡我們</h2>
      <div className="max-w-lg mx-auto card p-8 rounded-lg shadow-xl" style={{
        backgroundColor: 'rgba(17, 24, 39, 0.85)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(55, 65, 81, 0.6)'
      }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">您的姓名</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 placeholder-gray-400"
              placeholder="請輸入您的姓名"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">您的郵箱</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 placeholder-gray-400"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">您的留言</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 placeholder-gray-400"
              placeholder="輸入您的諮詢內容..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors"
          >
            發送訊息
          </button>
        </form>
        <p className="text-center text-sm md:text-base text-gray-400 mt-6 leading-relaxed">
          您也可以透過以下方式聯絡我們：<br />
          地址：香港數碼港，Unit 405-414，Level 4 Core E, CyberPort 3<br />
          郵箱：<a href="mailto:info@cloudwindai.com" className="text-sky-300 hover:underline">info@cloudwindai.com</a><br />
          網址：CloudWindAI.com
        </p>
      </div>
    </section>
  );
};
