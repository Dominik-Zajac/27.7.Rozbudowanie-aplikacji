import React from 'react';

const AddComment = ({text, votes, id, addComment}) =>
	<div>
		<button className='btn-add-comment' onClick={ () => addComment(id) }>Add Comment</button>
	</div>;

export default AddComment;