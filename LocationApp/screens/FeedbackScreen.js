
import React, { useState } from 'react';

export default function FeedbackScreen() {
    const [feedback, setFeedback] = useState('');

    function submitFeedback() {
        // Placeholder logic for submitting feedback
        console.log(feedback);
        setFeedback('');  // Clear the feedback
    }

    return (
        <div>
            <h2>Provide Feedback</h2>
            <textarea 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts or report issues here."
            />
            <button onClick={submitFeedback}>Submit</button>
        </div>
    );
}
