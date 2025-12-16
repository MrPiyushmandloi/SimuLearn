// Search functionality
const searchInput = document.getElementById('search');
const topicItems = document.querySelectorAll('.topic-item');
const topicCount = document.getElementById('topic-count');

function updateTopicCount() {
    const visibleTopics = document.querySelectorAll('.topic-item:not([style*="display: none"])').length;
    topicCount.textContent = `${visibleTopics} topic${visibleTopics !== 1 ? 's' : ''}`;
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    topicItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'flex' : 'none';
    });
    updateTopicCount();
});

// Initial count
updateTopicCount();
