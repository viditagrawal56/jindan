## Setting up the environment

1. Install all the dependencies:

```bash
npm install
# or
yarn install
```

2. Rename the `.env.sample` file to `.env` and provide the `API_KEY` and `API_SECRET`:

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sending a message

To send a message you need to make a POST request to [http://localhost:3000/api/send-message](http://localhost:3000/api/send-message) with a body containing the following json:

```
{
    "to": "THE_PHONE_NUMBER",
    "from": "Vonage APIs",
    "text": "This message was sent through Vonage API for testing"
}
```

You can use `Postman` for making such requests.
