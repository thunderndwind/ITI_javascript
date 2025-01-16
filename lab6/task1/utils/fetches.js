import {
    baseUrl,
    commentsEndpoint,
    postsEndpoint,
    usersEndpoint,
} from "./config.js";

export const getUsers = async () => {
    try {
        const usersPromise = await fetch(`${baseUrl}${usersEndpoint}`);
        const users = await usersPromise.json();
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
    return;
};

export const getUserPosts = async (userId) => {
    try {
        const postsPromise = await fetch(
            `${baseUrl}${postsEndpoint}?userId=${userId}`
        );
        const posts = await postsPromise.json();
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
    return;
};

export const getPostComments = async (postId) => {
    try {
        const commentsPromise = await fetch(
            `${baseUrl}${commentsEndpoint}?postId=${postId}`
        );
        const comments = await commentsPromise.json();
        return comments;
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
    return;
};
