import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = 'all' | 'my';

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setAcitveTap] = useState<TabType>('all');

  return (
    <>
      {hasNavigation && (
        <nav className="post__navigation">
          <div
            role="presentation"
            onClick={() => setAcitveTap('all')}
            className={activeTab === 'all' ? 'post__navigation--active' : ''}
          >
            전체 글
          </div>
          <div
            role="presentation"
            onClick={() => setAcitveTap('my')}
            className={activeTab === 'my' ? 'post__navigation--active' : ''}
          >
            나의 글
          </div>
        </nav>
      )}
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">패스트캠퍼스</div>
                <div className="post__date">2025.09.11 목요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus magnam quam sed atque quas
                delectus laboriosam vel molestiae voluptatibus officia quia quaerat reprehenderit magni aspernatur vitae
                necessitatibus. Expedita, tempora.
              </div>
              <div className="post__utils-box">
                <div className="post__edit">수정</div>
                <div className="post__delete">삭제</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
