# GitHub User Search Application


A responsive React application for searching and viewing GitHub user profiles using the GitHub API

## Features

- Search GitHub users by username
- Display user profile with avatar, bio, and stats
- Responsive design for all screen sizes
- Loading states and error handling
- Modern UI with animations and transitions

## Thought Process & Design Decisions

### Architecture
- **Component-based structure**: Organized UI into reusable components (SearchForm, UserProfile, etc.)
- **Hooks-based implementation**: Used useState for state management and useEffect for side effects
- **Separation of concerns**: Clear division between presentation and logic components

### UI/UX Considerations
- **Mobile-first approach**: Designed for small screens first, then enhanced for larger displays
- **Visual feedback**: Loading spinner, error messages, and hover effects
- **Accessibility**: Semantic HTML, proper contrast ratios, and keyboard navigation support
- **GitHub-inspired design**: Used GitHub's color palette for familiarity

### Technical Choices
- **React Icons**: For consistent, scalable vector icons
- **CSS Variables**: For maintainable theming and easy style adjustments
- **Modern CSS**: Flexbox, transitions, and animations for smooth interactions
- **Error handling**: Specific messages for different error cases (404 vs network errors)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/mightychild/github-name-search.git
   cd github-name-search
