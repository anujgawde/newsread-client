# NewsRead 📢📰

**NewsRead** is an innovative application designed to revolutionize how you consume news. By integrating advanced technologies, NewsRead offers a seamless way to stay updated with the latest news while catering to both readers and listeners.
Whether you're multitasking or just prefer listening over reading, NewsRead ensures you never miss out on the headlines. Its intuitive interface make it a perfect tool for modern users who value convenience and accessibility.
Note: This is the client side code for the project. To make it work locally, please follow the setup for [newsread-server](https://github.com/anujgawde/newsread-server) and run the project in parallel.

## Features 🚀

-   **News Fetching**: Automatically fetches the latest news articles from newsdata.io.
-   **Database Storage**: Efficiently stores fetched articles in a database for reducing api calls to external apis.
-   **Text-to-Speech**: Users can listen to articles using AWS Polly, making it ideal for hands-free news consumption.
-   **User-Friendly Interface**: Simplified navigation for browsing and playing news articles.

## Installation & Setup ⚙️

### Prerequisites

-   **npm** installed.
- Clone and install the server project by following the steps here: [newsread-server](https://github.com/anujgawde/newsread-server)

### Steps

1.  **Clone the Repository**:

    
    ```
    git clone https://github.com/anujgawde/newsread  
    cd newsread  
2.  **Install Dependencies**:
  
    ```
    npm install
3.  **Set Environment Variables**:  
    Create a `.env` file in the root directory and add the following:
    
    plaintext
    
    Copy code
    
    ```
	// This is our server code while running locally. Once deployed, exchange with hosted URL
    SERVER_BASE_URL=http://localhost:8001
4.  **Run the project**:
    
    ```
    npm run dev 
5.  **Access the Application**:  
    Open your browser and navigate to `http://localhost:3000`	
    
## Usage 📖

1.  **Listen to News**:
    -   Click the audio button on an article to hear it read aloud.

2.  **Browse and Read**:
    -   Browse through available news on various tabs via the bottom bar You can click on a news item to read the full article.

2.  **Search Articles** (Work in Progress)
    -   Search for keywords to filter news from our database.

## Tech Stack 🛠️

-   **Backend**:
    
	-   [NestJS](https://nestjs.com/)
    -   [AWS SDK](https://aws.amazon.com/sdk-for-javascript/)

-   **Frontend**:
    
    -   [Next.js](https://nextjs.org/)
    -   [Tailwind CSS](https://tailwindcss.com/)
-   **Database**:
    
    -   [PostgreSQL](https://www.postgresql.org/)
    - [NeonDB](https://neon.tech/)
    
-   **News API**:

    -   [newsdata.io](https://newsdata.io/)

## Roadmap 🗺️

-   Add user authentication and profiles
-   Implement personalized news recommendations
-   Enable multiple language support for TTS

## Contributing 🤝

Contributions are welcome! Please open an issue or submit a pull request for suggestions or improvements.

## Stay in touch

- Author - [Anuj Gawde](https://x.com/axgdevv)
