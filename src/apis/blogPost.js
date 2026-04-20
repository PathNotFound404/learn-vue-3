const BASE_URL = 'http://localhost:3000/blogPosts';

/**
 * Fetches all blog posts from the API.
 * @returns {Promise<Array>} A promise resolving to an array of blog posts.
 */
const findAll = async () => {
    try {
        const response = await fetch(BASE_URL);
        if(!response.ok) {
            throw new Error(`Error fetching blog posts: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * Fetches a blog post by its ID from the API.
 * @param {number} id The ID of the blog post to fetch.
 * @returns {Promise<Object>} A promise resolving to the blog post object.
 */
const findById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if(!response.ok) {
            throw new Error(`Error fetching blog post with ID ${id}: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {       
        console.error(error);
        throw error;
    }
}

export default {findAll, findById};