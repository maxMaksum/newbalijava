
module.exports = {
    images: {
        domains: ['media.graphcms.com', 'fakestoreapi.com', "links.papareact.com"],
      },

    env: {
      stripe_public_key:process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      stripe_secret_key:process.env.STRIPE_SECRET_KEY
     }

      
  }

  