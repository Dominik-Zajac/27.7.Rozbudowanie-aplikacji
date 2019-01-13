import React from 'react';
const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, deleteComment}) => 
	<li>
		{text}
		<span>votes: {votes}</span>
		<button className='btn-thumb-up' onClick={ () => thumbUpComment(id) }>Thumb Up</button>
		<button className='btn-thumb-down' onClick={ () => thumbDownComment(id) }>Thumb Down</button>
		<button className='btn-delete-comment' onClick={ () => deleteComment(id) }>X</button>
	</li>;
	
export default Comment;