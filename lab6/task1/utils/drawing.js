import { getUsers, getUserPosts } from "./fetches.js";
import { countPostComments } from "./helpers.js";

const drawPosts = async (post) => {
    const commentsCount = await countPostComments(post.id);

    return `
                    <li>
                    ${post.title}
                    <span>(${post.id})</span>
                    <ul>
                    <li>Comments Count: ${commentsCount}</li>
                    </ul>
                    </li>
            `;
};

export const drawTable = async () => {
    try {
        const users = await getUsers();

        for (const user of users) {
            const posts = await getUserPosts(user.id);
            const postsDrawing = await Promise.all(posts.map(drawPosts));
            const row = document.createElement("tr");

            row.innerHTML = `<td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.company.name}</td>
            <td>Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</td>
                <td>
                <ul>
                ${postsDrawing}
                </ul>
                </td>`;

            document.getElementById("user-table").appendChild(row);
        }
    } catch (error) {
        console.error("Error drawing table", error);
    }
    return;
};
