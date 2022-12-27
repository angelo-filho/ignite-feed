import styles from "./styles/app.module.scss";

import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { posts } from "./data/posts";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Card />

        <section className={styles.posts}>
          {posts.map((post) => {
            return (
              <Post
                key={post.content}
                author={post.author}
                commentsData={post.comments}
                created_at={post.created_at}
                content={post.content}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
