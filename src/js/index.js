async function clickBotton() {
  await getDate();
  await postData();
  const receivedData = await getData();
  const data = await parsingData(receivedData);
  await drawingTable(data);
}

document.querySelector('button').onclick = clickBotton;
