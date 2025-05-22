// Configuration
const isOwnProfile = false; // Set this to true to test "Own Profile" state

// DOM Elements
const followButton = document.querySelector('.follow-btn');

// Initialize button state based on isOwnProfile
function initializeButton() {
    if (isOwnProfile) {
        followButton.textContent = 'Own Profile';
        followButton.disabled = true;
    }
}

// Toggle follow state
function toggleFollowState() {
    if (isOwnProfile) return;

    const isFollowing = followButton.classList.contains('following');
    
    if (isFollowing) {
        followButton.textContent = 'Follow';
        followButton.classList.remove('following');
    } else {
        followButton.textContent = 'Following';
        followButton.classList.add('following');
    }
}

// Event Listeners
followButton.addEventListener('click', toggleFollowState);

// Initialize the component
initializeButton(); 