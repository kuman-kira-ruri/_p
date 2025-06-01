// import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>会社概要</h1>
      
      <div className="company-info">
        <h2>企業情報</h2>
        <table className="info-table">
          <tbody>
            <tr>
              <th>会社名</th>
              <td>株式会社サンプル</td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2024年4月1日</td>
            </tr>
            <tr>
              <th>代表取締役</th>
              <td>山田 太郎</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>
                <ul>
                  <li>Webアプリケーション開発</li>
                  <li>システムインテグレーション</li>
                  <li>ITコンサルティング</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒105-0011 東京都港区芝公園4-2-8</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="map-container">
        <h2>アクセス</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683817!2d139.74324421525877!3d35.65858053757872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2z5p2x5Lqs6YO95riv5Yy65YyX6Z2S5bGx77yT5LiB55uu77yV4oiS77yWIDjlpKnloII!5e0!3m2!1sja!2sjp!4v1647881234567!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default About; 