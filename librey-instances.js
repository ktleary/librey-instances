// Importing fetch from node-fetch (if needed, for Node versions before 18)
// const fetch = require('node-fetch');

async function getInstances() {
  try {
    const response = await fetch('https://search.ahwx.org/instances.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    data.instances.forEach(instance => {
      if (instance.clearnet) {
        console.log(instance.clearnet);
      }
    });
  } catch (error) {
    console.error('Error fetching instances:', error);
  }
}

getInstances();
