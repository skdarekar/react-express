import rateLimit from 'express-rate-limit';

export const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 min in milliseconds
  max: 5,
  message: 'You have exceeded the 5 requests in 2 mins limit!', 
  standardHeaders: true,
  legacyHeaders: false,
});