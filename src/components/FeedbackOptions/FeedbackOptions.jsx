import './FeedbackOptions.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className='feedbackButtons'> 
        {options.map(option => {
          return (
            <button className='button-feedback'
              type="button"
              onClick={() => onLeaveFeedback(option.toLowerCase())}
              key={option}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
