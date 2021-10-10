import React from "react";
import '../styles/home.scss';

function Home(props) {
  return (
    <div>
      <h1 className="landing-msg">Everything in one place.</h1>
      <div className="info">
        This is where about info goes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta malesuada nibh sed semper.
        Etiam hendrerit lectus vulputate, hendrerit libero eu, congue nisl. Cras imperdiet ipsum ex, at accumsan metus aliquet et. Maecenas luctus vitae ligula eleifend rutrum. Fusce in sem sit amet nibh fringilla tincidunt. Morbi leo tellus, viverra nec quam id, aliquet cursus risus. Etiam eu ipsum lectus. Nam sed nisl magna. Sed sem urna, gravida eu est tincidunt, egestas dapibus ex. Duis cursus at orci in malesuada. Proin at odio nisl. Pellentesque interdum congue rhoncus. Etiam pellentesque sagittis quam ac tempor. Nunc suscipit sodales congue.
      </div>
      <img className="landing-img" src="https://media.istockphoto.com/photos/office-tabletop-online-shopresponsive-design-website-picture-id1127293327?k=20&amp;m=1127293327&amp;s=612x612&amp;w=0&amp;h=OUQgtNWNowbU6wz4Sjc0Z3T9ylhRwj2RXSuMymla0GI=" alt="stock"></img>
    </div>
  );
}

export default Home;
