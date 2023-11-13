import SaveBtn from "./SaveBtn";

const Post = () => {
  return (
    <section className="container">
      <article className="card-post">
        <img className="card-image" src="" alt="" />
        <div className="card-header">
          <h2 className="card-title">Jakis</h2>
          <SaveBtn />
        </div>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          exercitationem!
        </p>
      </article>
    </section>
  );
};

export default Post;
