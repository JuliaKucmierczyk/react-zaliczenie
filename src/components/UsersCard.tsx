import '../images/sprite.svg';
const UsersCard = () => {
  return (
      <div className="card">
        <div className="media">
          <div className="media__image">
            <span className="icon-container">
            <img className="thumb" src="src\images\person_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </span>
          </div>
          <div className="media__body">
            <h3 className="media__title">Lelah Nichols</h3>
            <p>Troy, MI</p>
          </div>
        </div>
      </div>
  );
};

export default UsersCard;
