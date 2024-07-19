# My Image Editor (https://github.com/odufu/conten_creation_tool.git)

# How tp use this repo: INSTALLATION
1. Unzip the file
2. Open the Folder with your favourite terminal (I used Bash)
3. Install the Node packages ( npm install )
4. run the project (npm run dev)
5. open the project on the browser with the link 

# Project Overview
This project is a content creation tool that helps users edit selected images and download them. The application is built using Next.js 14 and TypeScript and uses the free image gallery API Lorem Pictus.

# User Stories
1. Browse image list with pagination.                     ✅
2. Image item shows:                                      ✅
    - Preview image                                       ✅
    - Author name                                         ✅
3. Click image to navigate to edit page.                  ✅
4. Edit image:                                            ✅
    - 4.1. Choose size: height & width                    ✅
    - 4.2. Select greyscale mode                          ✅
    - 4.3. Blur image (1-10)                              ✅
5. Show edited image preview.                             ✅
6. Download edited image.                                 ✅
7. Refresh and maintain previous results.                 ✅
8. Remember edit history on back button/ refresh.         ✅
9. Design: Photo grid layout (no external libraries).     ✅


# Requirements
Next.js 14
TypeScript


# Conclusion
This project fulfills the user stories and requirements for building a small content creation tool. The application allows users to browse, edit, and download images using the Lorem Pictus API.

### My Takeaways in the Project

   # Next.js and TypeScript:
    Utilizing the latest version of Next.js (Next.js 14).
    Ensuring type safety with TypeScript.

   # Component-Based Architecture:
    Breaking down the application into reusable components.

   # State Management:
    Using hooks like `useState`, `useEffect`, and custom hooks.

   # Local Storage and Persistence:
    Implementing local storage to save and restore user settings.

   # API Integration 
    Fetching data from the Lorem Pictus API.
    Handling asynchronous operations.

   # Image Manipulation 
    Implementing image resizing, greyscale, and blur functionalities.
    Providing real-time image preview.

   # File Download 
    Enabling users to download edited images.

   # Pagination 
    Implementing paginated image lists for efficient data handling.

   # Responsive Design 
    Ensuring the application is responsive across different screen sizes.

   # Error Handling 
    Properly managing errors and edge cases.

   # Performance Optimization 
    Implementing loading states (spinners) and optimizing performance.

   # Code Quality and Professionalism 
    Writing clean, readable, and maintainable code.
    Providing proper comments and documentation (README).

   # Custom Hooks 
    Creating custom hooks to encapsulate complex logic.

   # User Experience 
    Enhancing user experience by persisting state and providing a smooth UI.

   # Design Principles 
    Following a photo grid layout without using external libraries.