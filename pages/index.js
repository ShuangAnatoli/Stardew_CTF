// pages/index.js
import { useEffect } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';

export default function Home() {
  useEffect(() => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
          alert('flag3{FrozenTear_BatteryPack}');
        } else {
          alert('Please fill in both fields.');
        }
      });
    }

    // Clean up event listener on component unmount
    return () => {
      if (loginForm) {
        loginForm.removeEventListener('submit', function() {});
      }
    };
  }, []);

  return (
    <div>
      <Header />
      
      <Section id="login" title="Login">
        <form id="loginForm">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </Section>

      <Section id="main" title="Summary">
        <p>
          In the farming simulation game Stardew Valley, Robin and Demetrius are a married couple who reside in the Mountain area near the Carpenter's Shop. They have two children, Maru and Sebastian, each of whom has distinct interests and personalities.
        </p>
      </Section>

      <Section id="info" title="Information Section">
        <h3>Relationship</h3>
        <p>
          Robin and Demetrius share a loving but sometimes strained relationship. Robin, the town's carpenter, often works hard at her shop, building and upgrading farm buildings for players. Demetrius is a scientist focused on studying the local wildlife and ecosystems. Their differing personalities sometimes lead to minor conflicts, particularly regarding their children, but overall they support each other.
        </p>
        <h3>Children</h3>
        <p>
          Maru: A brilliant young woman with a keen interest in science and engineering, much like her father. She works at the local clinic with Harvey and can often be found tinkering with various gadgets and inventions.<br />
          Sebastian: The more reclusive and artistic of the two children, he prefers spending time on his computer and is passionate about programming. His relationship with his stepmother Robin is complicated, as he feels misunderstood by his family.<br />
        </p>
        <h3>Work</h3>
        <p>
          Robin: As the town carpenter, she plays a crucial role in the game by providing construction services. Players can visit her shop to purchase building materials, furniture, and to commission the construction or upgrade of farm buildings.<br />
          Demetrius: Primarily engaged in scientific research, he can be found either at home or studying local flora and fauna. He also helps Robin around the house and assists with family matters.<br />
        </p>
        <h3>Relationships with Villagers</h3>
        <p>
          Robin and Demetrius are well-liked members of the Pelican Town community.<br />
          Robin is friendly and often engages in conversations with various villagers. She is seen as dependable and hardworking.<br />
          Demetrius is respected for his intellect and scientific contributions, although he can come off as a bit aloof due to his analytical nature.<br />
        </p>
        <h3>Favourite Items</h3>
        <p>
          Both Robin and Demetrius love dancing. The two of them can be seen dancing at the Saloon or at festivals.<br />
          Robin: She appreciates gifts that reflect her practical and hardworking nature. Her favorite items include hardwood, goat cheese, peaches, and spaghetti.<br />
          Demetrius: He prefers gifts that align with his scientific interests and healthy lifestyle. His favorite items include strawberries, ice cream, bean hotpot, and rice pudding.<br />
        </p>
      </Section>

      <Section id="gallery" title="Gallery">
        <div className="image-container">
          <img src="/images/robin_and_demitrius_dancing.png" alt="dancing_5187499703609526" /><br />
        </div>
        <div className="image-container">
          <img src="/images/maru.jpeg" alt="maru_1234567812345678" /><br />
          <p hidden>37E43DBD0C217DD3B22186790007882A5389E64E9CF50958DB7D2D6B2B9F49F70E58A4E8A07E21683C966C0FC833C3E6</p>
        </div>
        <div className="image-container">
          <img src="/images/sebastian.jpeg" alt="sebby_2391326373490897" /><br />
        </div>
      </Section>

      <Section id="learn-more" title="Learn More">
        <p><a href="#login">Login</a> to learn more about their family.</p>
      </Section>
    </div>
  );
}
