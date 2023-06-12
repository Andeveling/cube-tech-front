export const develop = process.env.NODE_ENV !== "production";
export const arqustikConfig = {
  STRAPI_SERVER: develop
    ? "http://localhost:1337/api"
    : "https://arqustik-back-production.up.railway.app/api",
  NEXT_SERVER: develop
    ? "http://localhost:3000/api"
    : "https://arqustikquoter.vercel.app/api",
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY as string,
  NEXT_AUTH_SECRET: develop ? "12as12sd312dfa123" : process.env.NEXT_AUTH_SECRET,
};