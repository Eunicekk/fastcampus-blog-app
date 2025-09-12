export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">Lorem ipsum dolor sit amet.</div>
          <div className="post__profile-box"></div>
          <div className="post__profile-box">
            <div className="post__profile"></div>
            <div className="post__author-name">패스트캠퍼스</div>
            <div className="post__date">2025.09.11 목요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__edit">수정</div>
            <div className="post__delete">삭제</div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus magnam quam sed atque quas delectus
            laboriosam vel molestiae voluptatibus officia quia quaerat reprehenderit magni aspernatur vitae
            necessitatibus. Expedita, tempora.
          </div>
        </div>
      </div>
    </>
  );
}
