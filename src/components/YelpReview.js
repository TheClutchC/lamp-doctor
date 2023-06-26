import React, { useEffect } from 'react';

const YelpReview = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.yelp.com/embed/widgets.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <span className="yelp-review" data-review-id="XqCPhVuN89SJfcizXnL5FA" data-hostname="www.yelp.com">
      Read <a href="https://www.yelp.com/user_details?userid=28Pp3qJZI3AjMaXTPfmZ5w" rel="nofollow noopener">Jennifer W.</a>'s
      <a href="https://www.yelp.com/biz/the-lamp-doctor-santa-fe?hrid=XqCPhVuN89SJfcizXnL5FA" rel="nofollow noopener">review</a>
      of <a href="https://www.yelp.com/biz/yp8VntLLvycglYv7FLjByQ" rel="nofollow noopener">The Lamp Doctor</a> on
      <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a>
    </span>
  );
}

export default YelpReview;