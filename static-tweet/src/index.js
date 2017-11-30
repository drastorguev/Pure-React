import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
return (
  <div className="tweet">
    <Avatar name='DR was here'/>
      <div className="content">
      <NameWithHandle/><Time/>
      <Message/>
      <DR/>
      <Person2 firstName='Real' lastName='Stranger' />
      <Parent/>
      <div className="buttons">
        <ReplyButton/>
        <RetweetButton/>
        <LikeButton/>
        <MoreOptionsButton/>
      </div>
    </div>
  </div>
  );
}

function DR() {
  const firstName = "Dmitry";
  const lastName = "Rastorguev";
  return (
  <Person
  className='person'
  age={33}
  name={firstName + ' ' + lastName} />
);
}

function Person(props) {
  return (
    <p>
      I am here. I am {props.age} y.o. and my name is I am {props.name}.
    </p>
  );
};

const Person2 = ({ firstName, lastName }) => (
<span>Hello, {firstName} {lastName}</span>
);


function Avatar() {
  return (
    <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />
  );
};


function Message() {
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
    );
}

function NameWithHandle() {
return (
  <span className="name-with-handle">
    <span className="name">Your Name</span>
    <span className="handle">@yourhandle</span>
  </span>
);
}

const Time = () => (
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

function handleAction(event) {
  console.log('Child did:', event);
}
  function Parent() {
  return (
  <Child onAction={handleAction}/>
  );
}

function Child({ onAction }) {
  return (
  <button onClick={onAction}/>
  );
}

ReactDOM.render(<Tweet/>, document.querySelector('#root'));
