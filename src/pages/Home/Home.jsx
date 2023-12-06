import React from 'react'
import './home.css'
import { FaEllipsis } from "react-icons/fa6";
import star from '../../assets/imgs/star.svg'
import user from '../../assets/imgs/user.png'
import image_pic from '../../assets/imgs/image.svg';
import stats from '../../assets/imgs/stats.svg';
import smile from '../../assets/imgs/smile.svg';
import gif from "../../assets/imgs/gif.svg";
import frame from "../../assets/imgs/Frame.svg";
import comment from '../../assets/imgs/comment.svg'
import retweet from "../../assets/imgs/retweet.svg";
import post__like from "../../assets/imgs/like.svg";
import post_share from "../../assets/imgs/share.svg";
import post__statistics from "../../assets/imgs/statistics.svg";








const Home = () => {

// const url = 'https://twitter154.p.rapidapi.com/user/details?username=omarmhaimdat&user_id=96479162';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '79040252cemsh562468721609df7p1ef2f7jsnfaccb47e9a5a',
// 		'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
// 	}
// };



// async function getUsersDetails(){
// try {
//   const response = await fetch(url, options);
//   const result = await response.json();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
// }

// getUsersDetails()







  return (
    <div className="home">
      <div className="home__left">
        <header>
          <h1 className="home__title">Home</h1>
          <img src={star} alt="home-star" className="home__star" />
        </header>

        <div className="tweet">
          <div className="tweet__left">
            <img src={user} alt="user" className="tweet__left-logo" />
            <div className="tweet__write">
              <h3>What’s happening</h3>
              <div className="tweet__links">
                <a href="/">
                  {" "}
                  <img src={image_pic} alt="image_pic" />
                </a>
                <a href="/">
                  {" "}
                  <img src={gif} alt="gif" />
                </a>
                <a href="/">
                  {" "}
                  <img src={stats} alt="stats" />
                </a>
                <a href="/">
                  {" "}
                  <img src={smile} alt="smile" />
                </a>
                <a href="/">
                  {" "}
                  <img src={frame} alt="frame" />
                </a>
              </div>
            </div>
          </div>
          <div className="tweet__right">
            <button className="tweet-btn">Tweet</button>
          </div>
        </div>

        <div className="tweet__posts">
          <div className="tweet__post">
            <img className="tweet__user-img" src={user} alt="user" />
            <div className="post__info">
              <div className="post__user-info">
                <h2>Designsta</h2>
                <h3>@inner</h3>
                <span>· 25m</span>
              </div>
              <div className="post__text">
                <p>
                  Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                  zerikmadinglarmi?
                </p>
              </div>
              <div className="post__data">
                <div className="post__comment">
                  <a href="./">
                    <img src={comment} alt="comment" />
                  </a>
                  <span>10</span>
                </div>
                <div className="post__retweet">
                  <a href="./">
                    <img src={retweet} alt="retweet" />
                  </a>
                  <span>12</span>
                </div>
                <div className="post__like">
                  <a href="./">
                    <img src={post__like} alt="like" />
                  </a>
                  <span>12</span>
                </div>
                <div className="post__share">
                  <a href="./">
                    <img src={post_share} alt="share" />
                  </a>
                  <span>12</span>
                </div>
                <div className="post__statistics">
                  <a href="./">
                    <img src={post__statistics} alt="statistics" />
                  </a>
                  <span></span>
                </div>
              </div>
            </div>
            <FaEllipsis />
          </div>
        </div>
      </div>
      <div className="home__right">
        <input
          type="text"
          className="search-btn-tweet"
          placeholder="Search tweets"
        />
        <div className="trends">
          <div className="trends__header">
            <h2>Trends for you</h2>
          </div>
          <div className="trend">
            <div className="trend__info">
              <span>Trendings in Germany</span>
              <h2>Revolution</h2>
              <span>50.04 K tweets</span>
            </div>
            <FaEllipsis />
          </div>
          <div className="trend">
            <div className="trend__info">
              <span>Trendings in Germany</span>
              <h2>Revolution</h2>
              <span>50.04 K tweets</span>
            </div>
            <FaEllipsis />
          </div>
          <div className="trend">
            <div className="trend__info">
              <span>Trendings in Germany</span>
              <h2>Revolution</h2>
              <span>50.04 K tweets</span>
            </div>
            <FaEllipsis />
          </div>

          <a href="/">Show more</a>
        </div>
        <div className="might-like">
          <h2>You might like</h2>
          <div className="might-like__user">
            <img src={user} alt={user} />
            <h3>
              Mushtariy <span>@Mushtar565266</span>
            </h3>
            <button className="btn-follow">follow</button>
          </div>
          <div className="might-like__user">
            <img src={user} alt={user} />
            <h3>
              Mushtariy <span>@Mushtar565266</span>
            </h3>
            <button className="btn-follow">follow</button>
          </div>
          <a href="/">show more</a>

        </div>
      </div>
    </div>
  );
}

export default Home