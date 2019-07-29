import React from 'react';

const HomePage = ({history}) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <div className="content">My Phone Book</div>
          </h1>
          <div onClick={() => history.push('/contacts')} className="ui huge white inverted button">
            Click Here
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(5, 55, 167, 0.4)" }}>
       
      </div>
    </div>
  );
};

export default HomePage;
