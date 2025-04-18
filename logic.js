// Main JS logic
// This file contains the JavaScript code for the website. It handles interactivity and dynamic content on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready!');

    // Add event listener for the "Learn More" button
    const meditationButton = document.getElementById('meditationbutton');
    if (meditationButton) {
        meditationButton.addEventListener('click', () => {
            showMeditationDetails();
        });
    }

    const searchBar = document.getElementById('searchBar');
    const resultsContainer = document.getElementById('results');

    // Example data for search functionality
    const data = {
        detox: "Detox helps cleanse your body by removing toxins.",
        meditation: "Meditation improves focus and reduces stress.",
        fitness: "Fitness activities enhance physical and mental health.",
    };

    // Event listener for search input
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.trim().toLowerCase();
        if (query) {
            resultsContainer.innerHTML = `<p>Results for "${query}"</p>`;
            resultsContainer.style.display = 'block'; // Show the results container
        } else {
            resultsContainer.style.display = 'none'; // Hide the results container if input is empty
        }
    });

    const suggestionsContainer = document.getElementById('suggestions');

    // Ensure the required elements exist
    if (!searchBar || !suggestionsContainer || !resultsContainer) {
        console.error('Search bar, suggestions container, or results container not found in the DOM.');
        return;
    }

    // Data structure for advice
    

    // Collect all keywords from adviceData
    const keywords = Object.keys(adviceData.nutrition)
        .concat(Object.keys(adviceData.meditation))
        .concat(Object.keys(adviceData.fitness));

    // Add event listener for input in the search bar
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase().trim();
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions
        resultsContainer.innerHTML = ''; // Clear previous results

        if (query.length >= 2) { // Show suggestions only if the input has at least 2 characters
            const filteredSuggestions = [];

            // Search through each category in adviceData
            Object.keys(adviceData).forEach(category => {
                // Check if the category matches the query
                if (category.toLowerCase().startsWith(query)) {
                    filteredSuggestions.push({ category, keyword: category }); // Add the category itself as a suggestion
                }

                // Check if any keywords in the category match the query
                Object.keys(adviceData[category]).forEach(keyword => {
                    if (keyword.toLowerCase().startsWith(query)) {
                        filteredSuggestions.push({ category, keyword }); // Add the keyword as a suggestion
                    }
                });
            });

            if (filteredSuggestions.length > 0) {
                suggestionsContainer.style.display = 'block'; // Show suggestions container
                filteredSuggestions.forEach(({ category, keyword }) => {
                    const suggestion = document.createElement('div');
                    suggestion.textContent = `${keyword} (${category})`; // Display keyword or category with its type
                    suggestion.style.padding = '8px';
                    suggestion.style.cursor = 'pointer';
                    suggestion.style.borderBottom = '1px solid #ddd'; // Add a border for better visibility

                    // Add click event to set the search bar value and trigger the search
                    suggestion.addEventListener('click', () => {
                        searchBar.value = keyword; // Set the search bar value to the selected keyword
                        suggestionsContainer.style.display = 'none'; // Hide suggestions
                        searchAdvice(keyword); // Trigger the search function with the selected keyword
                    });

                    suggestionsContainer.appendChild(suggestion);
                });
            } else {
                suggestionsContainer.style.display = 'none'; // Hide suggestions if no matches
            }
        } else {
            suggestionsContainer.style.display = 'none'; // Hide suggestions if input is less than 2 characters
        }

        // Automatically search when the user types a full keyword
        const flattenedKeywords = Object.keys(adviceData.nutrition)
            .concat(Object.keys(adviceData.meditation))
            .concat(Object.keys(adviceData.fitness));
        if (flattenedKeywords.includes(query)) {
            searchAdvice(query); // Trigger the search function if the query matches a keyword
        }
    });

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.trim();
        if (query) {
            searchAdvice(query);
        } else {
            resultsContainer.style.display = 'none'; // Hide results if input is empty
        }
    });

    // Function to search and display results
    function searchAdvice(query) {
        console.log("Search query:", query); // Debugging
        const results = [];

        // Flatten the adviceData structure for easier searching
        const flattenedData = flattenAdviceData(adviceData);

        // Search through the flattened data
        for (const [keyword, { category, advice }] of Object.entries(flattenedData)) {
            if (keyword.toLowerCase() === query.toLowerCase().trim()) {
                // Format the advice into sections
                const formattedAdvice = advice
                    .split('. ')
                    .map((sentence) => {
                        if (sentence.startsWith('When:')) return `<strong>When:</strong> ${sentence.slice(5)}`;
                        if (sentence.startsWith('For what:')) return `<strong>For what:</strong> ${sentence.slice(9)}`;
                        if (sentence.startsWith('How to:')) return `<strong>How to:</strong> ${sentence.slice(8)}`;
                        if (sentence.startsWith('Steps:')) return `<strong>Steps:</strong> ${sentence.slice(7)}`;
                        if (sentence.startsWith('Examples:')) return `<strong>Examples:</strong> ${sentence.slice(9)}`;
                        if (sentence.startsWith('Brands:')) return `<strong>Brands:</strong> ${sentence.slice(7)}`;
                        if (sentence.startsWith('Resources:')) return `<strong>Resources:</strong> ${sentence.slice(10)}`;
                        return sentence;
                    })
                    .join('<br>');

                results.push(`
                    <div class="result-item">
                        <h3>${keyword.toUpperCase()} (${category})</h3>
                        <p>${formattedAdvice}</p>
                    </div>
                `);
            }
        }

        // Display results
        if (results.length > 0) {
            resultsContainer.innerHTML = results.join('');
            resultsContainer.style.display = 'block'; // Show the results box
        } else {
            resultsContainer.innerHTML = "<div>No results found for your search. Please try a different keyword.</div>";
            resultsContainer.style.display = 'block'; // Show the results box even if no results are found
        }
    }

    // Helper function to flatten the adviceData structure
    function flattenAdviceData(data) {
        const flattened = {};

        function recurse(obj, parentCategory = '') {
            for (const key in obj) {
                if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    recurse(obj[key], parentCategory || key);
                } else {
                    flattened[key.toLowerCase()] = { category: parentCategory, advice: obj[key] };
                }
            }
        }

        recurse(data);
        return flattened;
    }

    // Call the autocomplete initialization function
    initializeAutocomplete();

    // Dynamically populate the "Keywords Section"
    const keywordsSection = document.getElementById('keywordsSection');

    if (keywordsSection) {
        Object.keys(adviceData).forEach(category => {
            // Create a heading for each category
            const categoryHeading = document.createElement('h3');
            categoryHeading.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the category name
            keywordsSection.appendChild(categoryHeading);

            // Create a list for the keywords in this category
            const keywordList = document.createElement('ul');
            keywordList.style.listStyle = 'none';
            keywordList.style.padding = '0';
            keywordList.style.textAlign = 'center';

            // Add each keyword to the list
            Object.keys(adviceData[category]).forEach(keyword => {
                const listItem = document.createElement('li');
                listItem.textContent = keyword;
                keywordList.appendChild(listItem);
            });

            keywordsSection.appendChild(keywordList);
        });
    }

    populateKeywordsSection();
});

// Function to dynamically show meditation details
function showMeditationDetails() {
    const meditationText = document.getElementById('meditationtext');
    if (meditationText) {
        meditationText.textContent = "Meditation helps improve daily life by reducing stress, enhancing focus, and fostering emotional resilience. It allows individuals to approach challenges with a calm and clear mind.";
        meditationText.style.display = 'block'; // Ensure the text is visible
    }
}

// Function to initialize autocomplete suggestions
function initializeAutocomplete() {
    const searchBar = document.getElementById('searchBar');
    const suggestionsContainer = document.getElementById('suggestions');

    if (!searchBar || !suggestionsContainer) {
        console.error('Search bar or suggestions container not found in the DOM.');
        return;
    }

    // Collect all keywords with their categories
    const flattenedData = flattenAdviceData(adviceData);
    const keywordsWithCategories = Object.entries(flattenedData).map(([keyword, { category }]) => ({
        keyword,
        category,
    }));

    // Add event listener for input in the search bar
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase().trim();
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions

        if (query.length >= 2) { // Show suggestions only if the input has at least 2 characters
            // Filter keywords based on the user's input
            const filteredKeywords = keywordsWithCategories.filter(({ keyword }) =>
                keyword.startsWith(query)
            );

            if (filteredKeywords.length > 0) {
                suggestionsContainer.style.display = 'block'; // Show suggestions container
                filteredKeywords.forEach(({ keyword, category }) => {
                    const suggestion = document.createElement('div');
                    suggestion.innerHTML = `<strong>${keyword}</strong> (${category})`; // Display keyword with its category
                    suggestion.style.padding = '8px';
                    suggestion.style.cursor = 'pointer';
                    suggestion.addEventListener('click', () => {
                        searchBar.value = keyword; // Set the search bar value to the selected keyword
                        suggestionsContainer.style.display = 'none'; // Hide suggestions
                        searchAdvice(keyword); // Pass the selected keyword to the search function
                    });
                    suggestionsContainer.appendChild(suggestion);
                });
            } else {
                suggestionsContainer.style.display = 'none'; // Hide suggestions if no matches
            }
        } else {
            suggestionsContainer.style.display = 'none'; // Hide suggestions if input is less than 2 characters
        }
    });

    // Hide suggestions when clicking outside the search bar or suggestions container
    document.addEventListener('click', (event) => {
        if (!suggestionsContainer.contains(event.target) && event.target !== searchBar) {
            suggestionsContainer.style.display = 'none';
        }
    });
}

// Function to populate the Keywords by Category section
function populateKeywordsSection() {
    const keywordsSection = document.getElementById('keywordsSection');
    if (!keywordsSection) return;

    const flattenedData = flattenAdviceData(adviceData);

    // Group keywords by category
    const categories = {};
    for (const [keyword, { category }] of Object.entries(flattenedData)) {
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(keyword);
    }

    // Generate HTML for each category
    let html = '<h2>All Keywords by Category</h2>';
    for (const [category, keywords] of Object.entries(categories)) {
        html += `
            <div style="margin-bottom: 20px;">
                <h3 style="color: #007BFF;">${category.toUpperCase()}</h3>
                <ul style="list-style: none; padding: 0;">
                    ${keywords
                        .map(
                            (keyword) =>
                                `<li style="margin-bottom: 5px; font-size: 16px; color: #333;">${keyword}</li>`
                        )
                        .join('')}
                </ul>
            </div>
        `;
    }

    // Add the generated HTML to the section
    keywordsSection.innerHTML = html;
}

// Helper function to flatten the adviceData structure
function flattenAdviceData(data) {
    const flattened = {};

    function recurse(obj, parentCategory = '') {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                recurse(obj[key], parentCategory || key);
            } else {
                flattened[key.toLowerCase()] = { category: parentCategory, advice: obj[key] };
            }
        }
    }

    recurse(data);
    return flattened;
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateKeywordsSection();
});

// Typing animation for the H1 heading
document.addEventListener('DOMContentLoaded', () => {
    const headingText = "Your Wellness Hub. Search Away."; // The text to be typed
    const headingElement = document.querySelector('header h1'); // Target the header's H1 element
    let index = 0;

    // Clear the text content before starting the animation
    headingElement.textContent = "";

    function typeLetter() {
        if (index < headingText.length) {
            headingElement.textContent += headingText.charAt(index); // Add one letter at a time
            index++;
            setTimeout(typeLetter, 100); // Adjust typing speed (100ms per letter for slower typing)
        }
    }

    typeLetter(); // Start the typing animation
});



const resultsContainer = document.getElementById('results');
resultsContainer.style.backgroundColor = '#fff'; // White background
resultsContainer.style.color = '#333'; // Dark text for readability
resultsContainer.style.padding = '10px'; // Add padding for spacing
resultsContainer.style.border = '1px solid #ddd'; // Add a light border
resultsContainer.style.borderRadius = '8px'; // Rounded corners
resultsContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Subtle shadow for a modern look
resultsContainer.style.marginTop = '10px'; // Add spacing below the search bar
resultsContainer.style.display = 'block'; // Show the results container

