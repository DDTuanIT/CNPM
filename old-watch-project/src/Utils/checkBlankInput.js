export function checkBlankInput(dataArray) {
  return dataArray.some((item) => item.trim() === "");
}
