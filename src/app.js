const url = "https://0ryae060n4.execute-api.eu-north-1.amazonaws.com/prod/fvisitorscount-crc";

async function numberofUsers() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error in the response: " + response.status);
    }

    const data = await response.json(); 

    const container = document.getElementById("visits");
    container.textContent = `Number of visitors: ${data.nvisitors}`;
    
  } catch (error) {
    console.error("There was a problem with fetch:", error);
  }
}

numberofUsers();
