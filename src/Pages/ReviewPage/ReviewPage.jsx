import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [reviewerName, setReviewerName] = useState('');
    const [rating, setRating] = useState(0);

    const handleAddReview = () => {
        if (reviewText && reviewerName && rating > 0) {
            const newReview = {
                id: Date.now(),
                name: reviewerName,
                text: reviewText,
                rating,
                date: new Date().toLocaleDateString(),
            };
            setReviews([newReview, ...reviews]);
            setReviewText('');
            setReviewerName('');
            setRating(0);
        }
    };

    return (
        <div className="py-20 bg-gradient-to-b from-purple-100 to-blue-100 min-h-screen">
            <div className="max-w-7xl mx-8 md:mx-10 lg:mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-10 text-purple-800">Doctor Reviews</h1>

                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-purple-700">Leave a Review</h2>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={reviewerName}
                        onChange={(e) => setReviewerName(e.target.value)}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-400"
                    />
                    <textarea
                        placeholder="Write your review..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-400"
                        rows="4"
                    ></textarea>
                    <div className="flex items-center mb-4">
                        <span className="mr-3 font-semibold text-gray-700">Rate:</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                onClick={() => setRating(star)}
                                className={`cursor-pointer text-2xl ${
                                    rating >= star ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleAddReview}
                        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                        Submit Review
                    </button>
                </div>

                <div className="max-w-lg mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-purple-800">Reviews</h2>
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white p-6 mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            >
                                <div className="flex justify-between items-center">
                                    <p className="text-xl font-bold text-purple-700">{review.name}</p>
                                    <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    {[...Array(review.rating)].map((_, index) => (
                                        <FaStar key={index} className="text-yellow-400 text-lg" />
                                    ))}
                                    {[...Array(5 - review.rating)].map((_, index) => (
                                        <FaStar key={index} className="text-gray-300 text-lg" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mt-2 leading-relaxed">{review.text}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 text-center">No reviews yet. Be the first to review!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
