const reply = document.querySelector(".reply")
const comments = document.querySelector(".comments");
const comment1 = document.querySelector(".comment");

comments.addEventListener("click", (evt) => {
    console.log(evt.target.classList.contains("reply")
    );
    console.log(evt.target.parentElement.parentElement
    );
    
    if(evt.target.classList.contains("reply")){
      generateReply(evt.target.parentElement.parentElement);
    }
});

function generateReply(et) {
    if (et.querySelector("form")) return;
  const form = document.createElement("form");
  form.className = "flex items-center gap-3 mt-4";
  form.action = "";

  // Create input
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Write a reply...";
  input.className = "flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm";

  // Create button
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Submit";
  button.className = "bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md";

  // Append input and button to form
  form.appendChild(input);
  form.appendChild(button);

  // Append form to the body or any container


  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Page reload se bacha

    // Create main comment container
    const comment = document.createElement('div');
    comment.className = 'comment bg-white p-4 rounded shadow mb-4';

    // User info row
    const userInfo = document.createElement('div');
    userInfo.className = 'flex items-center mb-2';

    const username = document.createElement('span');
    username.className = 'font-semibold text-gray-800 mr-2';
    username.textContent = 'user1';

    const time = document.createElement('span');
    time.className = 'text-xs text-gray-500';
    time.textContent = '2 hours ago';

    userInfo.appendChild(username);
    userInfo.appendChild(time);

    // Comment text
    const text = document.createElement('p');
    text.className = 'text-gray-700 mb-2';
    text.textContent = 'This is the first comment. I love this post!';

    // Buttons (Reply / Upvote / Downvote)
    const buttons = document.createElement('div');
    buttons.className = 'flex space-x-4 text-sm text-gray-500';

    const replyBtn = document.createElement('button');
    replyBtn.className = 'reply hover:underline';
    replyBtn.textContent = 'Reply';

    const upvoteBtn = document.createElement('button');
    upvoteBtn.className = 'hover:underline';
    upvoteBtn.textContent = 'Upvote';

    const downvoteBtn = document.createElement('button');
    downvoteBtn.className = 'hover:underline';
    downvoteBtn.textContent = 'Downvote';

    buttons.appendChild(replyBtn);
    buttons.appendChild(upvoteBtn);
    buttons.appendChild(downvoteBtn);

    // Append all to main comment
    comment.appendChild(userInfo);
    comment.appendChild(text);
    comment.appendChild(buttons);

    // Add to page
    et.appendChild(comment);

      et.removeChild(form);


  });
    et?.appendChild(form);

}




