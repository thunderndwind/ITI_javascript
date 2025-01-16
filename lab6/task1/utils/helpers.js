import { getPostComments } from "./fetches.js";

export const countPostComments = async (postId) => {
    try {
        const comments = await getPostComments(postId);
        const commentsCounter = comments.length;
        return commentsCounter;
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
    return 0;
};
