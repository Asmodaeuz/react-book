export function generateId() {
    const id = Math.random(10).toString() + Math.random().toString()
    const regEx = new RegExp('[.]', 'g')
    return id.replace(regEx, '')
}

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

    var loadedPosts = loadPosts()

    const savedPosts = loadedPosts.filter(item => item.isSaved)
    
    if(savedPosts) {
        return savedPosts
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

export function asdPost(post) {    
    const allPosts = loadPosts()

    const postIndex = allPosts.findIndex(item => item.id === post.id)

    allPosts[postIndex] = post

    let save = {
        posts: allPosts
    }
    
    localStorage.setItem('current', JSON.stringify(save))

    window.location.reload()
}

export function savePost(post) {

    const allPosts = loadPosts()

    const postIndex = allPosts.findIndex(item => item.id === post.id)

    allPosts[postIndex].isSaved =  !allPosts[postIndex].isSaved

    let save = {
        posts: allPosts
    }
    
    localStorage.setItem('current', JSON.stringify(save))

    window.location.reload()
    
}

export function deletePost(post) {
    let currentPosts = loadPosts()
    let filteredPosts = currentPosts.filter(item => post.id !== item.id)
    
    let filtered = {
        posts: filteredPosts
    }

    localStorage.setItem('current', JSON.stringify(filtered))
    window.location.reload()
}
