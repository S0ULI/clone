import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/', '/about', ,'/products', `/products/:productId`, '/api/products', '/api/products/:productId', '/api', '/api/webhooks/user', '/api/search', '/api/search/:searchTerm', '/search', '/search/:searchTerm', '/cart']
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 