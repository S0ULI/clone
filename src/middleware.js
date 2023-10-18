import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/', '/about', ,'/products', `/products/:productId`, '/api/products', '/api/products/:productId', '/api', '/api/webhooks/user', '/api/searh', '/api/search/:searchTerm']
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 