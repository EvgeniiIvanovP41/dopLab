async function clickBotton() {
  await getDate();
  await postData();
  let receivedData = await getData();
  let data = await parsingData(receivedData);
  await drawingTable(data);
}

document.querySelector('button').onclick = clickBotton;

