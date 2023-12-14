import React from 'react';
import Layout from 'layouts/Main';

const AboutPage = () => (
  <Layout>
    <div>
      <h2>About Page</h2>

      <section>
        <h3>🪶Company History</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vestibulum metus sit amet quam varius, at posuere justo fringilla.
          Integer nec tristique eros, et laoreet enim. Nullam vitae rhoncus
          lectus. Duis vel justo a quam placerat scelerisque. Sed quis congue
          nunc. Vestibulum at sapien quis velit tincidunt vestibulum. Ut ut
          libero at elit tempus facilisis.
        </p>
        <p>
          Sed varius dapibus libero, ut hendrerit nisi hendrerit ac. Sed
          tincidunt cursus bibendum. Mauris vitae enim vel est congue
          pellentesque. Sed interdum arcu vel nisi dignissim, a euismod erat
          fermentum. Fusce vitae nulla non velit iaculis ultrices vel ac urna.
        </p>
      </section>

      <section>
        <h3>🗺️Blog Journey</h3>
        <p>
          In the early days, our blog started as a humble platform to share our
          passion for technology. Little did we know that it would grow into a
          vibrant community of readers and contributors. We've overcome
          challenges, celebrated successes, and continuously evolved to provide
          valuable content to our audience.
        </p>
        <p>
          The journey has been filled with learning experiences, and we are
          excited about the future chapters yet to unfold. We appreciate each
          and every reader who has been part of our blog's journey.
        </p>
      </section>

      <section>
        <h3>📜Mission Statement</h3>
        <p>
          Our mission is to empower and inspire individuals through
          informative and engaging content. We strive to deliver high-quality
          articles, tutorials, and insights that cater to a diverse audience.
          Whether you are a seasoned developer or a tech enthusiast, our goal
          is to provide valuable resources that enhance your knowledge and
          passion for technology.
        </p>
      </section>

      <section>
        <h3>💻Meet the Team</h3>
        <div>
          <h4>Alix Marian R. Gonzaga</h4>
          <p>
            Alix is a passionate developer with a focus on front-end
            technologies. She loves building user interfaces that provide
            delightful experiences. In her free time, she enjoys listening to music and sleeping.
          </p>
        </div>

        <div>
          <h4>Mariane Rosario D. Historia</h4>
          <p>
            Mariane is a dedicated full-stack developer who enjoys solving
            complex problems. She has a keen interest in database design and
            optimization. Outside of coding, Mariane is an avid reader and
            loves discovering new recipes to try in the kitchen.
          </p>
        </div>

        <div>
          <h4>Ivan Uriel C. Sejismundo</h4>
          <p>
            Ivan is a back-end developer with a strong background in
            server-side technologies. He is enthusiastic about optimizing code
            for performance. In his spare time, Ivan enjoys outdoor activities
            like hiking and biking.
          </p>
        </div>
      </section>

      <section>
        <h3>📰Newsletter Subscription</h3>
        <p>
          Stay updated with the latest tech trends and exclusive content by
          subscribing to our newsletter. By subscribing, you'll receive regular
          updates, curated articles, and special offers directly to your
          inbox.
        </p>
        <h4>What to Expect:</h4>
        <ul>
          <li>▶ Insightful articles on emerging technologies.</li>
          <li>▶ Exclusive tutorials and coding tips.</li>
          <li>▶ Early access to events and promotions.</li>
        </ul>
        <h4>Join our community today and elevate your tech journey!</h4>

        <h3>📣Testimonials</h3>
        <blockquote>
          "This blog has been a valuable resource for staying updated on the
          latest tech advancements. The content is both informative and
          enjoyable to read." - John Doe
        </blockquote>
        <blockquote>
          "Subscribing to the newsletter was one of the best decisions I made.
          The curated content is relevant, and I always look forward to the
          next update!" - Jane Smith
        </blockquote>
      </section>
    </div>
  </Layout>
);

export default AboutPage;
