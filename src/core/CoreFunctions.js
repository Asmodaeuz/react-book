export function loadPosts() {
    let currentPosts = localStorage.getItem('current')
    currentPosts = JSON.parse(currentPosts)

    if(currentPosts) {
        return currentPosts.posts
    } else {
        return []
    }
}

export function loadSavedPosts() {
    let savedPosts = localStorage.getItem('saved')
    savedPosts = JSON.parse(savedPosts)
    
    if(savedPosts) {
        return savedPosts.posts
    } else {
        return []
    }

}

export function createPost(post) {
    
    const currentPosts = loadPosts()

    let create = {
        posts: currentPosts.concat([post])
    }

    localStorage.setItem('current', JSON.stringify(create))

}

export function editPost() {

}

export function savePost(post) {

    const savedPosts = loadSavedPosts()

    let save = {
            posts: savedPosts.concat([post])
    }
    
    localStorage.setItem('saved', JSON.stringify(save))
    
}

export function unmarkPost() {
    
}

export function deletePost() {
    
}
