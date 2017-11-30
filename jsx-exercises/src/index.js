import React from 'react';
import ReactDOM from 'react-dom';
function MyThing() {
 return (
  <div>
   <div className='book'>
      <div className='title'>
      The Title
      </div>
      <div className='author'>
      The Author
      </div>
      <ul className='stats'>
      <li className='rating'>
      5 stars
      </li>
      <li className='isbn'>
      12-345678-910
      </li>
      </ul>
    </div>
    <br/>
    <div>
    Newline
    Test
    </div>
    <br/>
    <div>
    Empty
    Newlines
    Here
    </div>
    <br/>
    <div>
    &nbsp;Non-breaking
    &nbsp;Spaces&nbsp;
    </div>
    <div>
    Line1
    {' '}
    Line2
    </div>
    <UserStatus/>
  </div>
 )
}

function UserStatus() {
  var status = 'NLI'
  var name = "Stranger!"

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    if (status == "NLI" ) {
      var status = "LI!"
      var name = "Dmitry!"
    } else {
      var status = "NLI!"
      var name = "Stranger!"
    }
  }

  return (
    <button onClick={handleClick}>Hello, {name}!</button>
  );
};


ReactDOM.render( <MyThing/>, document.getElementById('root'));
