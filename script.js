import { OpenSeaStreamClient, Network, LogLevel } from '@opensea/stream-js';

// Initialize the OpenSea Stream client
const client = new OpenSeaStreamClient({
    token: 'bb3f49a151564d3fa8be33af2a969b79
', // Replace with your API key
    network: Network.MAINNET,      // Choose MAINNET or TESTNET
    logLevel: LogLevel.INFO
});

// Function to log events on the webpage
const logEvent = (message) => {
    const eventLog = document.getElementById('events-log');
    const newEvent = document.createElement('div');
    newEvent.textContent = message;
    eventLog.appendChild(newEvent);
};

// Subscribe to events (Example: item listed and item sold)
client.onItemListed('*', (event) => {
    logEvent(`Item Listed: ${JSON.stringify(event)}`);
});

client.onItemSold('*', (event) => {
    logEvent(`Item Sold: ${JSON.stringify(event)}`);
});

// To unsubscribe from an event, you can store the unsubscribe function like this:
// const unsubscribe = client.onItemListed('collection-slug', handleEventFunction);
// unsubscribe();

// To manually connect and disconnect (optional)
client.connect();
// To disconnect: client.disconnect();
