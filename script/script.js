

function loadCategories() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
}

const loadCategoryVideos = (id) => {
    // console.log(id)
    const url =
        `https://openapi.programming-hero.com/api/phero-tube/category/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.category))
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }

function displayCategories(categories) {

    const categoriesContainer = document.getElementById('categoryContainer');

    for (const category of categories) {
        // console.log(category)
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
            <button onclick="loadCategoryVideos(${category.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>
        `;
        categoriesContainer.appendChild(categoryDiv);

    }
}

// {
//     "category_id": "1001",
//     "video_id": "aaal",
//     "thumbnail": "https://i.ibb.co/hdtZYbB/enchnting.jpg",
//     "title": "Enchanted Harmonies",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/jh1q2F3/shopia.jpg",
//             "profile_name": "Sophia Williams",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "7.6K",
//         "posted_date": "16450"
//     },
//     "description": "'Enchanted Harmonies' by Sophia Williams enchants listeners with its delicate, soothing sounds and melodic complexity. Garnering 7.6K views, this piece is perfect for those seeking an immersive musical experience that blends elegance with emotion, offering a unique soundscape that resonates deeply with its audience."
// }

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = "";
    videos.forEach(video => {
        console.log(video)
        const videoDiv = document.createElement('div');
        videoDiv.innerHTML = `
            <div class="card bg-base-100">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" />
                <span class="absolute bottom-2 right-2 p-1 rounded-md text-xs bg-black text-white">3hrs 56 min
                    ago</span>
            </figure>
            <div class="flex py-5 gap-3">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>
                <div class="intro">
                    <h2 class="font-semibold text-lg">${video.title}</h2>
                    <p class="flex gap-2 text-sm text-gray-400">${video.authors[0].profile_name}<img class="w-5 h-5"
                            src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">${video.others.views} views</p>
                </div>
            </div>
        </div>
        `;

        videoContainer.append(videoDiv)
    });
}

loadCategories()
// loadVideos()