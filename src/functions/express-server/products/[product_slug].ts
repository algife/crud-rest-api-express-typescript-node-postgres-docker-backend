// GET /api/products/:product_slug
// -------------------------------
// Serverless Function with URL params published through Vercel for demo purposes
// Check: https://blog.logrocket.com/serverless-deployments-vercel-node-js/

export default function handler(req: any, res: any) {
  const { product_slug } = req.query;
  res.end(`Item: ${product_slug}`);
}
