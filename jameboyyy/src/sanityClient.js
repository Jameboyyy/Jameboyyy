import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    apiVersion: '2022-03-07',
    token: 'skiuyo1aswJINzuhTC2ZLLXl4NX5jNJbOKjPQABzDC5lYzx9EmX0gqkXMGyerz8Cj4ygXLNodUtnfWVxYgzJqyGzmNpgthqIAvWHS8hnJWmFrTqBJ6MTgN1vTxwWR7FK4TN4Vqq1cQQstAMkTou02CobmsMV2mjngShWRMIKH37CCNbco8Z2',
    useCdn: true,
});