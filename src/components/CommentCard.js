import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const CommentCard = function (props) {
  return (
    <div className='panel panel-default'>
      <div className='panel-body'>
        <style>{css}</style>
        <p>{props.body}</p>
        <p>By {props.created_by} | Created: {moment(props.created_at).fromNow()}</p>
      </div>
    </div>
  );
};

export default CommentCard;

CommentCard.propTypes = {
    created_at: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired
};

const css = `
    .panel-body {
        font-family: Optima;
    }`;