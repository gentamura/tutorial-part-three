import React from "react";

export default () => (
  <div>
    <h1>I'd love to talk! Email me at the address below</h1>
    <form name="contact" method="POST" netlify>
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <div data-netlify-recaptcha></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);
